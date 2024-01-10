using Sellino.Domain.Models;
using Sellino.Domain.Repositories;

namespace Sellino.Domain.Interfaces
{
    public interface IProductRepository
    {
        Task<int> CreateProduct(Product product);
        Task<List<Product>> GetProducts();
        Task<List<Product>> GetProductsByProductGroupId(int productGroupId);
        Task<Product> GetProduct(Guid productToken);
        Task<Product> GetProduct(int productId);
        Task<bool> UpdateProduct(Product product);
        Task<bool> DeleteProduct(Guid productToken);
    }
}
