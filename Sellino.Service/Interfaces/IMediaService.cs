using Sellino.Domain.Models;

namespace Sellino.Service.Interfaces
{
    public interface IMediaService
    {
        Task<int> CreateMedia(MediaModel media);
        Task<MediaModel> GetMedia(int mediaId);
    }
}
