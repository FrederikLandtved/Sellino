using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Helpers;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly UserHelper _userHelper;
        private readonly IProfileService _profileService;

        public HomeController(UserHelper userHelper, IProfileService profileService)
        {
            _userHelper = userHelper;
            _profileService = profileService;
        }


        [HttpGet]
        [Route("/GetHomePage/")]
        public async Task<IActionResult> GetHomePage()
        {
            string firstName = _userHelper.GetFirstName();
            int userId = _userHelper.GetUserId();
            List<ProfileModel> profiles = await _profileService.GetProfilesByUserId(userId);

            var model = new HomePageModel()
            {
                FirstName = firstName,
                Profile = profiles[0]
            };

            return Ok(model);
        }

        public class HomePageModel
        {
            public string FirstName { get; set; }
            public ProfileModel Profile { get; set; }
        }
    }
}
