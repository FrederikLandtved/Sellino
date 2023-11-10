using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class ProfilePageSectionProfile : AutoMapper.Profile
    {
        public ProfilePageSectionProfile()
        {
            CreateMap<ProfilePageSectionModel, ProfilePageSection>().ReverseMap();
        }
    }
}
