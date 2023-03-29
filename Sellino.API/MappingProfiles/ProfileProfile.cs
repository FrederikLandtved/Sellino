using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class ProfileProfile : AutoMapper.Profile
    {
        public ProfileProfile()
        {
            CreateMap<ProfileModel, Profile>()
                .ReverseMap()
                .ForMember(x => x.UserCanEdit, opt => opt.Ignore());
        }
    }
}
