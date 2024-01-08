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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("[controller]")]
    public class ProfilePageController : ControllerBase
    {
        private readonly IProfilePageService _profilePageService;
        private readonly IProfilePageSectionService _profilePageSectionService;
        private readonly UserHelper _userHelper;

        public ProfilePageController(IProfilePageService profilePageService, UserHelper userHelper, IProfilePageSectionService profilePageSectionService)
        {
            _profilePageService = profilePageService;
            _userHelper = userHelper;
            _profilePageSectionService = profilePageSectionService;
        }

        [HttpGet]
        [Route("/ProfilePages/")]
        public async Task<IActionResult> GetProfilePages()
        {
            int profileId = _userHelper.GetProfileId();

            List<ProfilePageModel> profilePages = await _profilePageService.GetProfilePagesByProfileId(profileId);

            if (profilePages != null)
                return Ok(JsonSerializer.Serialize(profilePages));

            return BadRequest(new { Error = ResponseConstants.NotFound });
        }

        [HttpGet]
        [Route("/ProfilePages/Sections")]
        public async Task<IActionResult> GetProfilePagesWithSections()
        {
            int profileId = _userHelper.GetProfileId();
            List<ProfilePageWithSectionsModel> model = new List<ProfilePageWithSectionsModel>();
            List<ProfilePageModel> profilePages = await _profilePageService.GetProfilePagesByProfileId(profileId);

            if (profilePages != null)
            {
                // Sort profilePages based on IsFrontpage
                profilePages = profilePages.OrderByDescending(p => p.IsFrontpage).ToList();

                foreach (ProfilePageModel profilePage in profilePages)
                {
                    List<ProfilePageSectionModel> sections = await _profilePageSectionService.GetProfilePageSections(profilePage.ProfilePageId);

                    model.Add(new ProfilePageWithSectionsModel
                    {
                        ProfilePage = profilePage,
                        Sections = sections
                    });
                }

                return Ok(JsonSerializer.Serialize(model));
            }

            return BadRequest(new { Error = ResponseConstants.NotFound });
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("/Profiles/{profileId}/ProfilePages/Sections")]
        public async Task<IActionResult> GetProfilePagesWithSectionsByProfile(int profileId)
        {
            List<ProfilePageWithSectionsModel> model = new List<ProfilePageWithSectionsModel>();
            List<ProfilePageModel> profilePages = await _profilePageService.GetProfilePagesByProfileId(profileId);

            if (profilePages != null)
            {
                // Sort profilePages based on IsFrontpage
                profilePages = profilePages.OrderByDescending(p => p.IsFrontpage).ToList();

                foreach (ProfilePageModel profilePage in profilePages)
                {
                    List<ProfilePageSectionModel> sections = await _profilePageSectionService.GetProfilePageSections(profilePage.ProfilePageId);

                    model.Add(new ProfilePageWithSectionsModel
                    {
                        ProfilePage = profilePage,
                        Sections = sections
                    });
                }

                return Ok(JsonSerializer.Serialize(model));
            }

            return BadRequest(new { Error = ResponseConstants.NotFound });
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

        [HttpPost]
        [Route("/ProfilePages")]
        public async Task<IActionResult> CreateProfilePage([FromBody] CreateProfilePageModel model)
        {
            var profileId = _userHelper.GetProfileId();
            int profilePageId = 0;

            if (!String.IsNullOrEmpty(model.Name)) 
            {
                profilePageId = await _profilePageService.CreateProfilePage(new ProfilePageModel { IsFrontpage = model.IsFrontpage, Name = model.Name, ProfileId = profileId });
            }

            if(profilePageId != 0)
            {
                return Ok(profilePageId);
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("/ProfilePages/{profilePageToken}")]
        public async Task<IActionResult> DeleteProfile(Guid profilePageToken)
        {
            if(profilePageToken != Guid.Empty)
            {
                bool isDeleted = await _profilePageService.DeleteProfilePage(profilePageToken);

                return Ok(isDeleted);
            }

            return BadRequest();
        }

        [HttpPut]
        [Route("/ProfilePages/{profilePageToken}/Edit")]
        public async Task<IActionResult> UpdateProfile([FromBody] ProfilePageModel model)
        {
            if(model.ProfilePageId > 0)
            {
                int profileId = _userHelper.GetProfileId();

                if (model.IsFrontpage)
                {
                    await _profilePageService.UpdateFrontPage(model);
                }

                bool isUpdated = await _profilePageService.UpdateProfilePage(model);

                return Ok(isUpdated);
            }

            return BadRequest();
        }

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
