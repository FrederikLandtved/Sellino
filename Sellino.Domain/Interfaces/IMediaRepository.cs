using Sellino.Domain.Models;

namespace Sellino.Domain.Interfaces
{
    public interface IMediaRepository
    {
        Task<int> CreateMedia(Media media);
    }
}
