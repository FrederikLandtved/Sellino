using Sellino.Domain.Models;
using Sellino.Domain.Repositories;

namespace Sellino.Domain.Interfaces
{
    public interface IProfilePageRepository
    {
        Task<int> CreateProfilePage(ProfilePage profilePage);
        Task<bool> DeleteProfilePage(Guid profilePageToken);
        Task<ProfilePage> GetProfilePage(Guid profilePageToken);
        Task<ProfilePage> GetProfilePageById(int profilePageId);
        Task<List<ProfilePage>> GetProfilePagesByProfileId(int profileId);
        Task<bool> UpdateProfilePage(ProfilePage profilePage);
    }
}
