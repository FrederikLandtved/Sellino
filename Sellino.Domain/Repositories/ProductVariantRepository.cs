using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class ProductVariantRepository : IProductVariantRepository
    {
        ProductVariantDbContext _productVariantRepository;

        public ProductVariantRepository(ProductVariantDbContext db)
        {
            _productVariantRepository = db;
        }

        public async Task<int> CreateProductVariant(ProductVariant productVariant)
        {
            await _productVariantRepository.ProductVariants.AddAsync(productVariant);
            await _productVariantRepository.SaveChangesAsync();

            return productVariant.ProductVariantId;
        }

        public async Task<List<ProductVariant>> GetProductVariants()
        {
            return await _productVariantRepository.ProductVariants.ToListAsync();
        }
    }
}
