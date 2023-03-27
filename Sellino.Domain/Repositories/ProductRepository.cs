using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class ProductRepository : IProductRepository
    {
        ProductDbContext _productRepository;

        public ProductRepository(ProductDbContext db)
        {
            _productRepository = db;
        }

        public async Task<int> CreateProduct(Product product)
        {
            await _productRepository.Products.AddAsync(product);
            await _productRepository.SaveChangesAsync();

            return product.ProductId;
        }

        public async Task<bool> DeleteProduct(Guid productToken)
        {
            Product productToDelete = _productRepository.Products.First(x => x.ProductToken == productToken);
            productToDelete.IsDeleted = true;
            productToDelete.DateDeleted = DateTime.UtcNow;

            _productRepository.Products.Update(productToDelete);
            await _productRepository.SaveChangesAsync();

            return true;
        }

        public async Task<Product> GetProduct(Guid productToken)
        {
            return await _productRepository.Products.FirstAsync(x => x.ProductToken == productToken);
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _productRepository.Products.ToListAsync();
        }

        public async Task<List<Product>> GetProductsByProductGroupId(int productGroupId)
        {
            return await _productRepository.Products.Where(x => x.ProductGroupId == productGroupId).ToListAsync();
        }

        public async Task<bool> UpdateProduct(Product product)
        {
            product.DateModified = DateTimeOffset.UtcNow;

            _productRepository.Products.Update(product);
            await _productRepository.SaveChangesAsync();

            return true;
        }

    }
}
