using AutoMapper;
using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class ProductGroupProfile : AutoMapper.Profile
    {
        public ProductGroupProfile()
        {
            CreateMap<ProductGroup, ProductGroupModel>().ReverseMap();
        }
    }
}
