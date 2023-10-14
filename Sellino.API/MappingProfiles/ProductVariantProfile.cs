using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.API.MappingProfiles
{
    public class ProductVariantProfile : AutoMapper.Profile
    {
        public ProductVariantProfile()
        {
            CreateMap<ProductVariant, ProductVariantModel>().ReverseMap();
        }
    }
}
