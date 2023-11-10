using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class ProfilePageSectionRepository : IProfilePageSectionRepository
    {
        ProfilePageSectionDbContext _profilePageSectionRepository;

        public ProfilePageSectionRepository(ProfilePageSectionDbContext db)
        {
            _profilePageSectionRepository = db;
        }

        public async Task<int> CreateProfilePageSection(ProfilePageSection profilePageSection)
        {
            await _profilePageSectionRepository.ProfilePageSections.AddAsync(profilePageSection);
            await _profilePageSectionRepository.SaveChangesAsync();

            return profilePageSection.ProfilePageSectionId;
        }

        public async Task<bool> DeleteProfilePageSection(Guid profilePageSectionToken)
        {
            ProfilePageSection profilePageSectionToDelete = _profilePageSectionRepository.ProfilePageSections.First(x => x.ProfilePageSectionToken == profilePageSectionToken);

            _profilePageSectionRepository.ProfilePageSections.Remove(profilePageSectionToDelete);
            await _profilePageSectionRepository.SaveChangesAsync();

            return true;
        }

        public async Task<ProfilePageSection> GetProfilePageSection(Guid profilePageSectionToken)
        {
            ProfilePageSection profilePageSection = await _profilePageSectionRepository.ProfilePageSections.FirstOrDefaultAsync(x => x.ProfilePageSectionToken == profilePageSectionToken);

            if (profilePageSection == null)
                return null;

            return profilePageSection;
        }

        public async Task<ProfilePageSection> GetProfilePageSectionById(int profilePageSectionId)
        {
            ProfilePageSection profilePageSection = await _profilePageSectionRepository.ProfilePageSections.FirstOrDefaultAsync(x => x.ProfilePageSectionId == profilePageSectionId);

            if (profilePageSection == null)
                return null;

            return profilePageSection;
        }

        public async Task<List<ProfilePageSection>> GetProfilePageSections(int profilePageId)
        {
            List<ProfilePageSection> profilePageSections = await _profilePageSectionRepository.ProfilePageSections.Where(x => x.ProfilePageId == profilePageId).ToListAsync();

            return profilePageSections;
        }

        public async Task<bool> UpdateProfilePageSection(ProfilePageSection profilePageSection)
        {
            _profilePageSectionRepository.ProfilePageSections.Update(profilePageSection);

            await _profilePageSectionRepository.SaveChangesAsync();

            return true;
        }

    }
}
