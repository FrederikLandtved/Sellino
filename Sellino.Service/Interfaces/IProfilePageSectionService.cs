using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.Service.Interfaces
{
    public interface IProfilePageSectionService
    {
        Task<int> CreateProfilePageSection(ProfilePageSectionModel profilePageSection);
        Task<bool> DeleteProfilePageSection(Guid profilePageSectionToken);
        Task<ProfilePageSectionModel> GetProfilePageSection(Guid profilePageSectionToken);
        Task<ProfilePageSectionModel> GetProfilePageSectionById(int profilePageSectionId);
        Task<List<ProfilePageSectionModel>> GetProfilePageSections(int profileId);
        Task<bool> UpdateProfilePageSection(ProfilePageSectionModel profilePageSection);
    }
}
