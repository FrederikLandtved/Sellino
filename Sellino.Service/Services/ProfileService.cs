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
        private readonly AutoMapper.IMapper _autoMapper;

        public ProfileService(IProfileRepository profileRepository, AutoMapper.IMapper autoMapper)
        {
            _profileRepository = profileRepository;
            _autoMapper = autoMapper;
        }

        public async Task<int> CreateProfile(string name, string bio, int createdByUserId)
        {
            Profile profile = new Profile
            {
                Name = name,
                ProfileToken = Guid.NewGuid(),
                Bio = bio,
                BackgroundHexColor = "#ffffff",
                TextHexColor = "#000000",
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

        public async Task<List<ProfileModel>> GetProfiles()
        {
            List<Profile> profiles = await _profileRepository.GetProfiles();
            List<ProfileModel> profileModels = _autoMapper.Map<List<Profile>, List<ProfileModel>>(profiles);

            return profileModels;
        }

        public async Task<bool> UpdateProfile(ProfileModel profile)
        {
            Profile profileToUpdate = await _profileRepository.GetProfile(profile.ProfileToken);

            profileToUpdate.Name = profile.Name;
            profileToUpdate.BackgroundHexColor = profile.BackgroundHexColor;
            profileToUpdate.TextHexColor = profile.TextHexColor;
            profileToUpdate.Bio = profile.Bio;

            return await _profileRepository.UpdateProfile(profileToUpdate);
        }

        public async Task<bool> CreateProfileAccessForUser(int profileId, int userId, int createdByUserId)
        {
            return await _profileRepository.CreateProfileAccessForUser(profileId, userId, createdByUserId);
        }
    }
}
