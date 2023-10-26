using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class ProfilePageService : IProfilePageService
    {
        private readonly IProfilePageRepository _profilePageRepository;
        private readonly AutoMapper.IMapper _autoMapper;

        public ProfilePageService(IProfilePageRepository profilePageRepository, AutoMapper.IMapper autoMapper)
        {
            _profilePageRepository = profilePageRepository;
            _autoMapper = autoMapper;
        }

        public async Task<int> CreateProfilePage(ProfilePageModel profilePage)
        {
            ProfilePage newProfilePage = new ProfilePage
            {
                Name = profilePage.Name,
                IsFrontpage = profilePage.IsFrontpage,
                ProfilePageToken = Guid.NewGuid(),
                ProfileId = profilePage.ProfileId
            };

            return await _profilePageRepository.CreateProfilePage(newProfilePage);
        }

        public async Task<bool> DeleteProfilePage(Guid profilePageToken)
        {
            return await _profilePageRepository.DeleteProfilePage(profilePageToken);
        }

        public async Task<ProfilePageModel> GetProfilePage(Guid profilePageToken)
        {
            ProfilePage profilePage = await _profilePageRepository.GetProfilePage(profilePageToken);
            if (profilePage == null)
                return null;

            ProfilePageModel model = _autoMapper.Map<ProfilePageModel>(profilePage);

            return model;
        }

        public async Task<ProfilePageModel> GetProfilePageById(int profilePageId)
        {
            ProfilePage profilePage = await _profilePageRepository.GetProfilePageById(profilePageId);
            ProfilePageModel profilePageModel = _autoMapper.Map<ProfilePage, ProfilePageModel>(profilePage);

            return profilePageModel;
        }

        public async Task<List<ProfilePageModel>> GetProfilePagesByProfileId(int profileId)
        {
            List<ProfilePage> profilePages = await _profilePageRepository.GetProfilePagesByProfileId(profileId);
            List<ProfilePageModel> profilePageModels = _autoMapper.Map<List<ProfilePage>, List<ProfilePageModel>>(profilePages);

            return profilePageModels;
        }

        public async Task<bool> UpdateProfilePage(ProfilePageModel profilePage)
        {
            ProfilePage profilePageToUpdate = await _profilePageRepository.GetProfilePageById(profilePage.ProfilePageId);
            profilePageToUpdate.Name = profilePage.Name;
            profilePageToUpdate.IsFrontpage = profilePage.IsFrontpage;
            

            return await _profilePageRepository.UpdateProfilePage(profilePageToUpdate);
        }
    }
}
