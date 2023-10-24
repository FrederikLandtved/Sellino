using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class MediaProfile : AutoMapper.Profile
    {
        public MediaProfile()
        {
            CreateMap<MediaModel, Media>()
                .ReverseMap();
        }
    }
}
