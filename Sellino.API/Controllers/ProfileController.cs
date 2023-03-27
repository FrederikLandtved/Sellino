using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Constants;
using Sellino.API.Helpers;
using Sellino.API.Models.Product;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using System.Security.Claims;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;
        private readonly UserHelper _userHelper;

        public ProfileController(IProfileService profileService, UserHelper userHelper)
        {
            _profileService = profileService;
            _userHelper = userHelper;
        }

        [HttpGet]
        [Route("/Profiles/")]
        public async Task<IActionResult> GetAll()
        {
            var userId = _userHelper.GetUserId();

            var profiles = JsonSerializer.Serialize(await _profileService.GetProfiles());

            return Ok(profiles);
        }

        [HttpGet]
        [Route("/Profiles/{profileToken}")]
        public async Task<IActionResult> GetProfile(Guid profileToken)
        {
            ProfileModel profile = await _profileService.GetProfile(profileToken);

            if (profile != null)
                return Ok(JsonSerializer.Serialize(profile));

            return BadRequest(new { Error = ErrorConstants.NotFound });
        }

        [HttpGet]
        [Route("/Profiles/Edit/{profileToken}")]
        public async Task<IActionResult> GetProfileForEdit(Guid profileToken)
        {
            ProfileModel profile = await _profileService.GetProfile(profileToken);

            // Todo: Check if user has access to editing this profile
            bool userHasAccess = true;

            if (profile != null && userHasAccess)
                return Ok(JsonSerializer.Serialize(profile));

            return BadRequest(new { Error = ErrorConstants.NotFound });
        }

        [HttpPost]
        [Route("/Profiles")]
        public async Task<IActionResult> CreateProfile([FromBody]CreateProfileModel model)
        {
            var userId = _userHelper.GetUserId();
            int profileId = await _profileService.CreateProfile(model.Name, model.Bio, userId);

            return Ok(new { ProfileId = profileId });
        }

        [HttpDelete]
        [Route("/Profiles/{profileToken}")]
        public async Task<IActionResult> DeleteProfile(Guid profileToken)
        {
            await _profileService.DeleteProfile(profileToken);
            return Ok();
        }

        [HttpPut]
        [Route("/Profiles/{profileToken}")]
        public async Task<IActionResult> UpdateProfile(Guid profileToken, [FromBody]UpdateProfileModel model)
        {
            ProfileModel profileModel = new ProfileModel
            {
                ProfileToken = profileToken,
                Name = model.Name,
                Bio = model.Bio,
                TextHexColor = model.TextHexColor,
                BackgroundHexColor = model.BackgroundHexColor
            };

            await _profileService.UpdateProfile(profileModel);
            return Ok();
        }
    }
}
