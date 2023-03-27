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
    }
}
