using Sellino.Domain.Models;
using Sellino.Domain.Repositories;

namespace Sellino.Domain.Interfaces
{
    public interface IProfileRepository
    {
        Task<int> CreateProfile(Profile profile);
        Task<List<Profile>> GetProfiles();
        Task<Profile> GetProfile(Guid profileToken);
        Task<bool> UpdateProfile(Profile profile);
        Task<bool> DeleteProfile(Guid profileToken);

        // User profile access
        Task<bool> CreateProfileAccessForUser(int profileId, int userId, int createdByUserId);
        Task<bool> DeleteProfileAccessForUser(int profileId, int userId);
        Task<bool> UserHasAccess(int profileId, int userId);
    }
}
