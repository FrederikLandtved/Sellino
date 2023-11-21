using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Constants;
using Sellino.API.Helpers;
using Sellino.API.Models.Product;
using Sellino.API.Models.ProfilePageSection;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using System.Security.Claims;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("[controller]")]
    public class ProfilePageSectionController : ControllerBase
    {
        private readonly IProfilePageSectionService _profilePageSectionService;
        private readonly IProfilePageService _profilePageService;
        private readonly UserHelper _userHelper;

        public ProfilePageSectionController(IProfilePageSectionService profilePageSectionService, UserHelper userHelper, IProfilePageService profilePageService)
        {
            _profilePageSectionService = profilePageSectionService;
            _userHelper = userHelper;
            _profilePageService = profilePageService;
        }


        [HttpGet]
        [Route("/ProfilePageSections/{profilePageSectionToken}")]
        public async Task<IActionResult> GetProfilePageSection(Guid profilePageSectionToken)
        {
            ProfilePageSectionModel profilePageSection = await _profilePageSectionService.GetProfilePageSection(profilePageSectionToken);

            if (profilePageSection != null)
                return Ok(JsonSerializer.Serialize(profilePageSection));

            return BadRequest(new { Error = ResponseConstants.NotFound });
        }

        [HttpPost]
        [Route("/ProfilePageSections/{profilePageToken}")]
        public async Task<IActionResult> CreateProfilePageSection([FromRoute] Guid profilePageToken, [FromBody] CreateProfilePageSectionModel model)
        {
            var profileId = _userHelper.GetProfileId();
            int profilePageSectionId = 0;

            // Check if user has access
            ProfilePageModel profilePage = await _profilePageService.GetProfilePage(profilePageToken);
            if (profilePage.ProfileId != profileId)
                return Forbid();

            if (!String.IsNullOrEmpty(model.Name)) 
            {
                profilePageSectionId = await _profilePageSectionService.CreateProfilePageSection(new ProfilePageSectionModel { Name = model.Name, ProfilePageId = model.ProfilePageId, DataId = model.DataId, ProfilePageSectionType = model.ProfilePageSectionType, SortIndex = model.SortIndex });
            }

            if(profilePageSectionId != 0)
            {
                return Ok(profilePageSectionId);
            }

            return BadRequest();
        }

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
