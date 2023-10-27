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
    public class ProfilePageController : ControllerBase
    {
        private readonly IProfilePageService _profilePageService;
        private readonly UserHelper _userHelper;

        public ProfilePageController(IProfilePageService profilePageService, UserHelper userHelper)
        {
            _profilePageService = profilePageService;
            _userHelper = userHelper;
        }

        [HttpGet]
        [Route("/ProfilePages/{profilePageToken}")]
        public async Task<IActionResult> GetProfilePage(Guid profilePageToken)
        {
            ProfilePageModel profilePage = await _profilePageService.GetProfilePage(profilePageToken);

            if (profilePage != null)
                return Ok(JsonSerializer.Serialize(profilePage));

            return BadRequest(new { Error = ResponseConstants.NotFound });
        }

        [HttpGet]
        [Route("/ProfilePage/Edit")]
        public async Task<IActionResult> GetProfilePageForEdit()
        {
            int userId = _userHelper.GetUserId();
            int profilePageId = _userHelper.GetProfileId();

            ProfilePageModel profilePage = await _profilePageService.GetProfilePageById(profilePageId);

            if (profilePage != null)
                return Ok(profilePage);

            return BadRequest(new { Error = ResponseConstants.NotFound });
        }

        //[HttpPost]
        //[Route("/Profiles")]
        //public async Task<IActionResult> CreateProfile([FromBody]CreateProfileModel model)
        //{
        //    var userId = _userHelper.GetUserId();
        //    int profileId = await _profileService.CreateProfile(model.Name, model.Bio, userId);

        //    return Ok(new { ProfileId = profileId });
        //}

        //[HttpDelete]
        //[Route("/Profiles/{profileToken}")]
        //public async Task<IActionResult> DeleteProfile(Guid profileToken)
        //{
        //    await _profileService.DeleteProfile(profileToken);
        //    return Ok();
        //}

        //[HttpPut]
        //[Route("/Profile/Edit")]
        //public async Task<IActionResult> UpdateProfile([FromBody]ProfileModel model)
        //{
        //    int profileId = _userHelper.GetProfileId();

        //    await _profileService.UpdateProfile(model);

        //    return Ok();
        //}

        //[HttpPost]
        //[Route("/UserProfiles")]
        //public async Task<IActionResult> CreateUserProfile([FromBody] UserProfileModel model)
        //{
        //    int createdByUserId = 11;
        //    bool userProfileAccessWasCreated = await _profileService.CreateProfileAccessForUser(model.ProfileId, model.UserId, createdByUserId);

        //    if(userProfileAccessWasCreated)
        //        return Ok(new { Message = ResponseConstants.Created });

        //    return BadRequest();
        //}

        //[HttpDelete]
        //[Route("/UserProfiles")]
        //public async Task<IActionResult> DeleteUserProfile([FromBody] UserProfileModel model)
        //{
        //    bool userProfileWasDeleted = await _profileService.DeleteProfileAccessForUser(model.ProfileId, model.UserId);

        //    if (userProfileWasDeleted)
        //        return Ok(new { Message = ResponseConstants.Deleted });

        //    return BadRequest();

        //}
    }
}
