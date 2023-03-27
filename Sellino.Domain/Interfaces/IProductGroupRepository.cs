using Sellino.Domain.Models;
using Sellino.Domain.Repositories;

namespace Sellino.Domain.Interfaces
{
    public interface IProductGroupRepository
    {
        Task<int> CreateProductGroup(ProductGroup productGroup);
        Task<List<ProductGroup>> GetProductGroups();
        Task<List<ProductGroup>> GetProductGroupsByProfileId(int profileId);
        Task<ProductGroup> GetProductGroup(Guid productGroupToken);
        Task<bool> UpdateProductGroup(ProductGroup productGroup);
        Task<bool> DeleteProductGroup(Guid productGroupToken);
    }
}
