using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using static System.Collections.Specialized.BitVector32;

namespace Sellino.Service.Services
{
    public class ProfilePageSectionService : IProfilePageSectionService
    {
        private readonly IProfilePageSectionRepository _profilePageSectionRepository;
        private readonly AutoMapper.IMapper _autoMapper;

        public ProfilePageSectionService(IProfilePageSectionRepository profilePageSectionRepository, AutoMapper.IMapper autoMapper)
        {
            _profilePageSectionRepository = profilePageSectionRepository;
            _autoMapper = autoMapper;
        }

        public async Task<int> CreateProfilePageSection(ProfilePageSectionModel profilePageSection)
        {
            ProfilePageSection newProfilePageSection = new ProfilePageSection
            {
                Name = profilePageSection.Name,
                ProfilePageSectionToken = Guid.NewGuid(),
                ProfilePageId = profilePageSection.ProfilePageId,
                SortIndex = profilePageSection.SortIndex,
                ProfilePageSectionType = profilePageSection.ProfilePageSectionType,
                DataId = profilePageSection.DataId
            };

            return await _profilePageSectionRepository.CreateProfilePageSection(newProfilePageSection);
        }

        public async Task<bool> DeleteProfilePageSection(Guid profilePageSectionToken)
        {
            return await _profilePageSectionRepository.DeleteProfilePageSection(profilePageSectionToken);
        }

        public async Task<ProfilePageSectionModel> GetProfilePageSection(Guid profilePageSectionToken)
        {
            ProfilePageSection profilePageSection = await _profilePageSectionRepository.GetProfilePageSection(profilePageSectionToken);
            if (profilePageSection == null)
                return null;

            ProfilePageSectionModel model = _autoMapper.Map<ProfilePageSectionModel>(profilePageSection);

            return model;
        }

        public async Task<ProfilePageSectionModel> GetProfilePageSectionById(int profilePageSectionId)
        {
            ProfilePageSection profilePageSection = await _profilePageSectionRepository.GetProfilePageSectionById(profilePageSectionId);
            ProfilePageSectionModel profilePageSectionModel = _autoMapper.Map<ProfilePageSection, ProfilePageSectionModel>(profilePageSection);

            return profilePageSectionModel;
        }

        public async Task<List<ProfilePageSectionModel>> GetProfilePageSections(int profilePageId)
        {
            List<ProfilePageSection> profilePageSections = await _profilePageSectionRepository.GetProfilePageSections(profilePageId);
            List<ProfilePageSectionModel> profilePageSectionModels = _autoMapper.Map<List<ProfilePageSection>, List<ProfilePageSectionModel>>(profilePageSections);

            return profilePageSectionModels;
        }

        public async Task<bool> UpdateProfilePageSection(ProfilePageSectionModel profilePageSection)
        {
            ProfilePageSection profilePageSectionToUpdate = await _profilePageSectionRepository.GetProfilePageSectionById(profilePageSection.ProfilePageSectionId);
            profilePageSectionToUpdate.Name = profilePageSection.Name;
            profilePageSectionToUpdate.SortIndex = profilePageSection.SortIndex;
            profilePageSectionToUpdate.DataId = profilePageSection.DataId;
            profilePageSectionToUpdate.ProfilePageSectionType = profilePageSection.ProfilePageSectionType;

            return await _profilePageSectionRepository.UpdateProfilePageSection(profilePageSectionToUpdate);
        }
    }
}
