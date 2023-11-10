using Sellino.Domain.Models;
using Sellino.Domain.Repositories;

namespace Sellino.Domain.Interfaces
{
    public interface IProfilePageSectionRepository
    {
        Task<int> CreateProfilePageSection(ProfilePageSection profilePageSection);
        Task<bool> DeleteProfilePageSection(Guid profilePageSectionToken);
        Task<ProfilePageSection> GetProfilePageSection(Guid profilePageSectionToken);
        Task<ProfilePageSection> GetProfilePageSectionById(int profilePageSectionId);
        Task<List<ProfilePageSection>> GetProfilePageSections(int profilePageId);
        Task<bool> UpdateProfilePageSection(ProfilePageSection profilePageSection);
    }
}
