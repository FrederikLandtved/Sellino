using Sellino.Service.Models;

namespace Sellino.Service.Interfaces
{
    public interface IProductService
    {
        Task<int> CreateProduct(string name, string description, int price, int productGroupId, int createdByUserId);
        Task<List<ProductModel>> GetProducts();
        Task<List<ProductModel>> GetProductsFromProductGroup(int productGroupId);
        Task<List<ProductModel>> GetProductsFromProductGroup(Guid productGroupToken);
        Task<ProductModel> GetProduct(Guid productToken);
        Task<bool> UpdateProduct(ProductModel product);
        Task<bool> DeleteProduct(Guid productToken);
    }
}
