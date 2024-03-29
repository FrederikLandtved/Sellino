﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Sellino.API.Constants;
using Sellino.API.Models.Product;
using Sellino.API.Models.User;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using Sellino.Service.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;
        private readonly IProfileService _profileService;
        private readonly IProductGroupService _productGroupService;
        private readonly IProfilePageService _profilePageService;

        public AuthController(IConfiguration configuration, IUserService userService, IProfileService profileService, IProductGroupService productGroupService, IProfilePageService profilePageService)
        {
            _configuration = configuration;
            _userService = userService;
            _profileService = profileService;
            _productGroupService = productGroupService;
            _profilePageService = profilePageService;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(LoginModel user)
        {
            // Simulate server delay
            //await Task.Delay(1000);

            if (ModelState.IsValid)
            {
                User loggedInUser = await _userService.Login(user.Email, user.Password);

                if (loggedInUser != null)
                {
                    List<ProfileModel> profiles = await _profileService.GetProfilesByUserId(loggedInUser.UserId);

                    string finalToken = SetToken(loggedInUser, profiles.Any() ? profiles[0] : null);
                    loggedInUser.Password = "";

                    return Ok(new { Token = finalToken, User = loggedInUser, Profile = profiles.Any() ? profiles[0] : null });
                }
            }

            return BadRequest("Invalid credentials.");
        }


        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser(CreateUserModel user)
        {
            if (ModelState.IsValid)
            {
                int createdUserId = await _userService.CreateUser(user.Email, user.Password, user.FirstName, user.LastName);

                if (createdUserId > 0)
                {
                    if (user.CreateProfile)
                    {
                        int profileId = await _profileService.CreateProfile(user.ProfileName, String.Empty, createdUserId);

                        if (profileId > 0)
                            await _profileService.CreateProfileAccessForUser(profileId, createdUserId, createdUserId);

                        // Creates a default ProductGroup and ProfilePage when creating a new profile
                        await _productGroupService.CreateProductGroup("Alle produkter", profileId);
                        await _profilePageService.CreateProfilePage(new ProfilePageModel { IsFrontpage = true, Name = "Forside", ProfileId = profileId });
                    }

                    return Ok(new { response = "User was created! You can now login." });
                }

                return BadRequest(new { response = "User already exists." });
            }

            return BadRequest(new { response = "Please fill out all fields." });
        }

        private string SetToken(User loggedInUser, ProfileModel profile)
        {
            var jwt = _configuration.GetSection("Jwt").Get<JWT>();
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, jwt.Subject),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim(ClaimConstants.UserId, loggedInUser.UserId.ToString()),
                new Claim(ClaimConstants.Email, loggedInUser.Email),
                new Claim(ClaimConstants.FirstName, loggedInUser.FirstName)
            };

            if (profile != null)
            {
                claims.Add(new Claim(ClaimConstants.ProfileId, profile.ProfileId.ToString()));
            }

            // If you need an array, you can convert the list to an array
            var claimsArray = claims.ToArray();


            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                    jwt.Issuer,
                    jwt.Audience,
                    claimsArray,
                    expires: DateTime.Now.AddDays(5),
                    signingCredentials: signIn);

            string finalToken = new JwtSecurityTokenHandler().WriteToken(token).ToString();
            return finalToken;
        }

        [HttpGet]
        [Route("Touch")]
        public async Task<IActionResult> Touch()
        {
            return Ok("The API is running");
        }
    }
}
