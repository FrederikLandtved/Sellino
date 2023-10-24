using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Migrations.UserDb;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class MediaRepository : IMediaRepository
    {
        MediaDbContext _mediaRepository;

        public MediaRepository(MediaDbContext db)
        {
            _mediaRepository = db;
        }

        public async Task<int> CreateMedia(Media media)
        {
            await _mediaRepository.Media.AddAsync(media);
            await _mediaRepository.SaveChangesAsync();

            return media.MediaId;
        }

        public async Task<Media> GetMedia(int mediaId)
        {
            return await _mediaRepository.Media.FirstOrDefaultAsync(x => x.MediaId == mediaId);
        }
    }
}
