using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class ProfileRepository : IProfileRepository
    {
        ProfileDbContext _profileRepository;
        UserProfileDbContext _userProfileDb;
        public ProfileRepository(ProfileDbContext db, UserProfileDbContext userProfileDb)
        {
            _profileRepository = db;
            _userProfileDb = userProfileDb;
        }

        public async Task<int> CreateProfile(Profile profile)
        {
            await _profileRepository.Profiles.AddAsync(profile);
            await _profileRepository.SaveChangesAsync();

            return profile.ProfileId;
        }

        public async Task<bool> DeleteProfile(Guid profileToken)
        {
            Profile profileToDelete = _profileRepository.Profiles.First(x => x.ProfileToken == profileToken);
            profileToDelete.IsDeleted = true;
            profileToDelete.DateDeleted = DateTime.UtcNow;

            _profileRepository.Profiles.Update(profileToDelete);
            await _profileRepository.SaveChangesAsync();

            return true;
        }

        public async Task<Profile> GetProfile(Guid profileToken)
        {
            Profile profile = await _profileRepository.Profiles.FirstOrDefaultAsync(x => x.ProfileToken == profileToken);

            if (profile == null)
                return null;

            return profile;
        }

        public async Task<List<Profile>> GetProfiles()
        {
            return await _profileRepository.Profiles.ToListAsync();
        }

        public async Task<bool> UpdateProfile(Profile profile)
        {
            profile.DateModified = DateTimeOffset.UtcNow;

            _profileRepository.Profiles.Update(profile);
            await _profileRepository.SaveChangesAsync();

            return true;
        }

        public async Task<bool> CreateProfileAccessForUser(int profileId, int userId, int createdByUserId)
        {
            bool profileAccessWasCreated = false;

            if(profileId > 0 && userId > 0 && createdByUserId > 0)
            {
                UserProfile userProfile = new UserProfile { UserId = userId, ProfileId = profileId, CreatedByUserId = createdByUserId };
                await _userProfileDb.AddAsync(userProfile);
                await _userProfileDb.SaveChangesAsync();

                profileAccessWasCreated = true;
            }

            return profileAccessWasCreated;
        }

        public async Task<bool> DeleteProfileAccessForUser(int profileId, int userId)
        {
            bool profileAccessWasDeleted = false;

            if (profileId > 0 && userId > 0)
            {
                UserProfile userProfile = _userProfileDb.UserProfiles.Where(x => x.UserId == userId && x.ProfileId == profileId).First();
                _userProfileDb.UserProfiles.Remove(userProfile);
                _userProfileDb.SaveChanges();

                profileAccessWasDeleted = true;
            }

            return profileAccessWasDeleted;
        }

        public async Task<bool> UserHasAccess(int profileId, int userId)
        {
            bool userHasAccess = false;

            if (profileId > 0 && userId > 0)
                userHasAccess = await _userProfileDb.UserProfiles.Where(x => x.ProfileId == profileId && x.UserId == userId).AnyAsync();

            return userHasAccess;
        }

    }
}
