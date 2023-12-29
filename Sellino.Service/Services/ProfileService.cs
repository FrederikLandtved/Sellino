using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class ProfileService : IProfileService
    {
        private readonly IProfileRepository _profileRepository;
        private readonly IMediaService _mediaService;
        private readonly AutoMapper.IMapper _autoMapper;

        public ProfileService(IProfileRepository profileRepository, AutoMapper.IMapper autoMapper, IMediaService mediaService)
        {
            _profileRepository = profileRepository;
            _autoMapper = autoMapper;
            _mediaService = mediaService;
        }

        public async Task<int> CreateProfile(string name, string bio, int createdByUserId)
        {
            Profile profile = new Profile
            {
                Name = name,
                ProfileToken = Guid.NewGuid(),
                Bio = bio,
                CompanyHexColor = "#0070F4",
                TextOnCompanyHexColor = "#ffffff",
                DarkCompanyHexColor = "#0265DA",
                TextOnDarkCompanyHexColor = "#ffffff",
                SecondaryCompanyHexColor = "#3FD77C",
                TextOnSecondaryCompanyHexColor = "#ffffff",
                DateCreated = DateTimeOffset.UtcNow,
                IsDeleted = false,
                CreatedByUserId = createdByUserId
            };

            return await _profileRepository.CreateProfile(profile);
        }

        public async Task<bool> DeleteProfile(Guid profileToken)
        {
            return await _profileRepository.DeleteProfile(profileToken);
        }

        public async Task<ProfileModel> GetProfile(Guid profileToken)
        {
            Profile profile = await _profileRepository.GetProfile(profileToken);
            if (profile == null)
                return null;

            ProfileModel model = _autoMapper.Map<ProfileModel>(profile);

            return model;
        }

        public async Task<List<ProfileModel>> GetProfilesByUserId(int userId)
        {
            List<Profile> profiles = await _profileRepository.GetProfilesByUserId(userId);
            List<ProfileModel> profileModels = _autoMapper.Map<List<Profile>, List<ProfileModel>>(profiles);

            return profileModels;
        }

        public async Task<List<ProfileModel>> GetProfiles()
        {
            List<Profile> profiles = await _profileRepository.GetProfiles();
            List<ProfileModel> profileModels = _autoMapper.Map<List<Profile>, List<ProfileModel>>(profiles);

            foreach (var profileModel in profileModels)
            {
                if (profileModel.ProfileMediaId > 0)
                {
                    MediaModel mediaModel = await _mediaService.GetMedia((int)profileModel.ProfileMediaId);
                    profileModel.ProfileMedia = mediaModel;
                }
            }
            return profileModels;
        }

        public async Task<bool> UpdateProfile(ProfileModel profile)
        {
            Profile profileToUpdate = await _profileRepository.GetProfileById(profile.ProfileId);
            profileToUpdate.Name = profile.Name;
            profileToUpdate.Bio = profile.Bio;
            profileToUpdate.CompanyHexColor = profile.CompanyHexColor;
            profileToUpdate.TextOnCompanyHexColor = profile.TextOnCompanyHexColor;
            profileToUpdate.DarkCompanyHexColor = profile.DarkCompanyHexColor;
            profileToUpdate.TextOnDarkCompanyHexColor = profile.TextOnDarkCompanyHexColor;
            profileToUpdate.TextOnSecondaryCompanyHexColor = profile.TextOnSecondaryCompanyHexColor;
            profileToUpdate.SecondaryCompanyHexColor = profile.SecondaryCompanyHexColor;
            profileToUpdate.ProfileMediaId = profile.ProfileMediaId;
            profileToUpdate.CoverMediaId = profile.CoverMediaId;
            

            return await _profileRepository.UpdateProfile(profileToUpdate);
        }

        public async Task<bool> CreateProfileAccessForUser(int profileId, int userId, int createdByUserId)
        {
            return await _profileRepository.CreateProfileAccessForUser(profileId, userId, createdByUserId);
        }

        public async Task<bool> DeleteProfileAccessForUser(int profileId, int userId)
        {
            return await _profileRepository.DeleteProfileAccessForUser(profileId, userId);
        }

        public async Task<bool> UserHasAccess(int profileId, int userId)
        {
            return await _profileRepository.UserHasAccess(profileId, userId);
        }

        public async Task<ProfileModel> GetProfileById(int profileId)
        {
            Profile profile = await _profileRepository.GetProfileById(profileId);
            if (profile == null)
                return null;

            ProfileModel model = _autoMapper.Map<ProfileModel>(profile);

            return model;
        }
    }
}
