using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class ProfileRepository : IProfileRepository
    {
        ProfileDbContext _profileRepository;

        public ProfileRepository(ProfileDbContext db)
        {
            _profileRepository = db;
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

    }
}
