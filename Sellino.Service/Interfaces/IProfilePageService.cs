using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.Service.Interfaces
{
    public interface IProfilePageService
    {
        // Profile
        Task<int> CreateProfilePage(ProfilePageModel profilePage);
        Task<bool> DeleteProfilePage(Guid profilePageToken);
        Task<ProfilePageModel> GetProfilePage(Guid profilePageToken);
        Task<ProfilePageModel> GetProfilePageById(int profilePageId);
        Task<List<ProfilePageModel>> GetProfilePagesByProfileId(int profileId);
        Task<bool> UpdateProfilePage(ProfilePageModel profilePage);
    }
}
