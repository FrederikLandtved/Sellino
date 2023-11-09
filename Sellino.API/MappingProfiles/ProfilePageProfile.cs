using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class ProfilePageProfile : AutoMapper.Profile
    {
        public ProfilePageProfile()
        {
            CreateMap<ProfilePageModel, ProfilePage>().ReverseMap();
        }
    }
}
