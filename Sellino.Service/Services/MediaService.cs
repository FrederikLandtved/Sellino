using AutoMapper;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class MediaService : IMediaService
    {
        private readonly IMediaRepository _mediaRepository;
        private readonly IMapper _autoMapper;

        public MediaService(IMediaRepository mediaRepository, IMapper autoMapper)
        {
            _mediaRepository = mediaRepository;
            _autoMapper = autoMapper;
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

        public async Task<MediaModel> GetMedia(int mediaId)
        {
            Media model = await _mediaRepository.GetMedia(mediaId);
            MediaModel mediaModel = _autoMapper.Map<MediaModel>(model);

            return mediaModel;
        }
    }
}
