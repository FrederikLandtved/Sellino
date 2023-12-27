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
        private readonly IProductService _productService;
        private readonly IProductGroupService _productGroupService;
        private readonly UserHelper _userHelper;

        public ProfileController(IProfileService profileService, UserHelper userHelper, IProductService productService, IProductGroupService productGroupService)
        {
            _profileService = profileService;
            _userHelper = userHelper;
            _productService = productService;
            _productGroupService = productGroupService;
        }

        [HttpGet]
        [Route("/Profiles/")]
        public async Task<IActionResult> GetAll()
        {
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

            return BadRequest(new { Error = ResponseConstants.NotFound });
        }

        [HttpGet]
        [Route("/Profile/Edit")]
        public async Task<IActionResult> GetProfileForEdit()
        {
            int userId = _userHelper.GetUserId();
            int profileId = _userHelper.GetProfileId();

            ProfileModel profile = await _profileService.GetProfileById(profileId);

            if(profile != null)
                profile.UserCanEdit = await _profileService.UserHasAccess(profile.ProfileId, userId);

            if (profile != null)
                return Ok(profile);

            return BadRequest(new { Error = ResponseConstants.NotFound });
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
        [Route("/Profile/Edit")]
        public async Task<IActionResult> UpdateProfile([FromBody]ProfileModel model)
        {
            int profileId = _userHelper.GetProfileId();

            await _profileService.UpdateProfile(model);

            return Ok();
        }

        [HttpPost]
        [Route("/UserProfiles")]
        public async Task<IActionResult> CreateUserProfile([FromBody] UserProfileModel model)
        {
            int createdByUserId = 11;
            bool userProfileAccessWasCreated = await _profileService.CreateProfileAccessForUser(model.ProfileId, model.UserId, createdByUserId);

            if(userProfileAccessWasCreated)
                return Ok(new { Message = ResponseConstants.Created });

            return BadRequest();
        }

        [HttpDelete]
        [Route("/UserProfiles")]
        public async Task<IActionResult> DeleteUserProfile([FromBody] UserProfileModel model)
        {
            bool userProfileWasDeleted = await _profileService.DeleteProfileAccessForUser(model.ProfileId, model.UserId);

            if (userProfileWasDeleted)
                return Ok(new { Message = ResponseConstants.Deleted });

            return BadRequest();

        }

        [HttpGet]
        [Route("/Profiles/Products")]
        public async Task<IActionResult> GetProfilesWithProducts()
        {
            List<ProfileModel> profiles = await _profileService.GetProfiles();

            if (profiles == null || !profiles.Any())
            {
                return Ok(new List<ProfileWithProductsModel>());
            }

            List<ProfileWithProductsModel> profilesWithProducts = new List<ProfileWithProductsModel>();

            foreach (ProfileModel model in profiles)
            {
                ProfileWithProductsModel profileWithProductsModel = await CreateProfileWithProductsModelAsync(model);
                profilesWithProducts.Add(profileWithProductsModel);
            }

            return Ok(profilesWithProducts);
        }

        private async Task<ProfileWithProductsModel> CreateProfileWithProductsModelAsync(ProfileModel model)
        {
            List<ProductGroupModel> productGroups = await _productGroupService.GetProductGroupsByProfile(model.ProfileToken);

            ProfileWithProductsModel profileWithProductsModel = new ProfileWithProductsModel
            {
                Profile = model,
                Products = new List<ProductModel>()
            };

            foreach (ProductGroupModel productGroup in productGroups)
            {
                profileWithProductsModel.Products.AddRange(await _productService.GetProductsFromProductGroup(productGroup.ProductGroupId));
            }

            return profileWithProductsModel;
        }

    }
}
