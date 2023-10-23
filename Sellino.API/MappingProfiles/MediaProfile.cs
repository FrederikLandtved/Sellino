using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class MediaModel : AutoMapper.Profile
    {
        public MediaModel()
        {
            CreateMap<MediaModel, Media>()
                .ReverseMap();
        }
    }
}
