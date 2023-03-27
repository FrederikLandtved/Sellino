using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class ProductProfile : AutoMapper.Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductModel>().ReverseMap();
        }
    }
}
