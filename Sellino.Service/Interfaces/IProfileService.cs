using Sellino.Service.Models;

namespace Sellino.Service.Interfaces
{
    public interface IProfileService
    {
        // Profile
        Task<int> CreateProfile(string name, string bio, int createdByUserId);
        Task<List<ProfileModel>> GetProfiles();
        Task<ProfileModel> GetProfile(Guid profileToken);
        Task<ProfileModel> GetProfileById(int profileId);
        Task<List<ProfileModel>> GetProfilesByUserId(int userId);
        Task<bool> UpdateProfile(ProfileModel profile);
        Task<bool> DeleteProfile(Guid profileToken);

        // UserProfile Access
        Task<bool> CreateProfileAccessForUser(int profileId, int userId, int createdByUserId);
        Task<bool> DeleteProfileAccessForUser(int profileId, int userId);
        Task<bool> UserHasAccess(int profileId, int userId);
    }
}
