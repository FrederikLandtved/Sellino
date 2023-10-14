using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.Service.Interfaces
{
    public interface IProductVariantService
    {
        Task<int> CreateProductVariant(ProductVariantModel productVariant);

        Task<List<ProductVariantModel>> GetProductVariants();
    }
}
