using Sellino.Domain.Models;
using Sellino.Domain.Repositories;

namespace Sellino.Domain.Interfaces
{
    public interface IProductVariantRepository
    {
        Task<int> CreateProductVariant(ProductVariant productVariant);
        Task<List<ProductVariant>> GetProductVariants();
    }
}
