using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class ProfilePageRepository : IProfilePageRepository
    {
        ProfilePageDbContext _profilePageRepository;

        public ProfilePageRepository(ProfilePageDbContext db)
        {
            _profilePageRepository = db;
        }

        public async Task<int> CreateProfilePage(ProfilePage profilePage)
        {
            await _profilePageRepository.ProfilePages.AddAsync(profilePage);
            await _profilePageRepository.SaveChangesAsync();

            return profilePage.ProfilePageId;
        }

        public async Task<bool> DeleteProfilePage(Guid profilePageToken)
        {
            ProfilePage profilePageToDelete = _profilePageRepository.ProfilePages.First(x => x.ProfilePageToken == profilePageToken);

            _profilePageRepository.ProfilePages.Remove(profilePageToDelete);
            await _profilePageRepository.SaveChangesAsync();

            return true;
        }

        public async Task<ProfilePage> GetProfilePage(Guid profilePageToken)
        {
            ProfilePage profilePage = await _profilePageRepository.ProfilePages.FirstOrDefaultAsync(x => x.ProfilePageToken == profilePageToken);

            if (profilePage == null)
                return null;

            return profilePage;
        }

        public async Task<ProfilePage> GetProfilePageById(int profilePageId)
        {
            ProfilePage profilePage = await _profilePageRepository.ProfilePages.FirstOrDefaultAsync(x => x.ProfilePageId == profilePageId);

            if (profilePage == null)
                return null;

            return profilePage;
        }

        public async Task<List<ProfilePage>> GetProfilePagesByProfileId(int profileId)
        {
            List<ProfilePage> profilePages = await _profilePageRepository.ProfilePages.Where(x => x.ProfileId == profileId).ToListAsync();

            return profilePages;
        }

        public async Task<bool> UpdateProfilePage(ProfilePage profilePage)
        {
            _profilePageRepository.ProfilePages.Update(profilePage);

            await _profilePageRepository.SaveChangesAsync();

            return true;
        }

    }
}
