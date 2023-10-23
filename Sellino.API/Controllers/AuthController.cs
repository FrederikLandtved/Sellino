using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Sellino.API.Constants;
using Sellino.API.Models.Product;
using Sellino.API.Models.User;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
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
        public AuthController(IConfiguration configuration, IUserService userService, IProfileService profileService)
        {
            _configuration = configuration;
            _userService = userService;
            _profileService = profileService;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(LoginModel user)
        {
            // Simulate server delay
            await Task.Delay(1000);

            if (ModelState.IsValid)
            {
                User loggedInUser = await _userService.Login(user.Email, user.Password);

                if (loggedInUser != null)
                {
                    string finalToken = SetToken(loggedInUser);
                    loggedInUser.Password = "";

                    return Ok(new { Token = finalToken, User = loggedInUser });
                }
            }

            return Unauthorized("Invalid credentials.");
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
                    }

                    return Ok(new { response = "User was created! You can now login." });
                }

                return BadRequest(new { response = "User already exists." });
            }

            return BadRequest(new { response = "Please fill out all fields." });
        }

        private string SetToken(User loggedInUser)
        {
            var jwt = _configuration.GetSection("Jwt").Get<JWT>();
            var claims = new[]
            {
                        new Claim(JwtRegisteredClaimNames.Sub, jwt.Subject),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim(ClaimConstants.UserId, loggedInUser.UserId.ToString()),
                        new Claim(ClaimConstants.Email, loggedInUser.Email),
                        new Claim(ClaimConstants.FirstName, loggedInUser.FirstName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                    jwt.Issuer,
                    jwt.Audience,
                    claims,
                    expires: DateTime.Now.AddDays(5),
                    signingCredentials: signIn);

            string finalToken = new JwtSecurityTokenHandler().WriteToken(token).ToString();
            return finalToken;
        }
    }
}
