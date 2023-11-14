using Sellino.Domain.Models;
using Sellino.Service.Models;

namespace Sellino.Service.Interfaces
{
    public interface IProductGroupService
    {
        Task<int> CreateProductGroup(string name, int profileId);
        Task<List<ProductGroupModel>> GetProductGroups();
        Task<List<ProductGroupModel>> GetProductGroupsByProfile(Guid profileToken);
        Task<ProductGroupModel> GetProductGroup(Guid productGroupToken);
        Task<ProductGroupModel> GetProductGroup(int productGroupId);
        Task<bool> UpdateProductGroup(ProductGroupModel productGroup);
        Task<bool> DeleteProductGroup(Guid productGroupToken);
    }
}
