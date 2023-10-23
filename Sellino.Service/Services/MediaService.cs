using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;

namespace Sellino.Service.Services
{
    public class MediaService : IMediaService
    {
        private readonly IMediaRepository _mediaRepository;

        public MediaService(IMediaRepository mediaRepository)
        {
            _mediaRepository = mediaRepository;
        }

        public async Task<int> CreateMedia(MediaModel media)
        {
            Media mediaDto = new Media
            {
                MediaToken = Guid.NewGuid(),
                DateCreated = DateTimeOffset.Now,
                MediaData = media.MediaData,
                Name = media.Name,
                Type = media.Type
            };

            return await _mediaRepository.CreateMedia(mediaDto);
        }
    }
}
