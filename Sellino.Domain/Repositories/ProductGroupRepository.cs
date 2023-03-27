using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class ProductGroupRepository : IProductGroupRepository
    {
        ProductGroupDbContext _productGroupRepository;

        public ProductGroupRepository(ProductGroupDbContext db)
        {
            _productGroupRepository = db;
        }

        public async Task<int> CreateProductGroup(ProductGroup productGroup)
        {
            await _productGroupRepository.ProductGroups.AddAsync(productGroup);
            await _productGroupRepository.SaveChangesAsync();

            return productGroup.ProductGroupId;
        }

        public async Task<bool> DeleteProductGroup(Guid productGroupToken)
        {
            ProductGroup productGroupToDelete = _productGroupRepository.ProductGroups.First(x => x.ProductGroupToken == productGroupToken);
            productGroupToDelete.IsDeleted = true;
            productGroupToDelete.DateDeleted = DateTime.UtcNow;

            _productGroupRepository.ProductGroups.Update(productGroupToDelete);
            await _productGroupRepository.SaveChangesAsync();

            return true;
        }

        public async Task<ProductGroup> GetProductGroup(Guid productGroupToken)
        {
            return await _productGroupRepository.ProductGroups.FirstAsync(x => x.ProductGroupToken == productGroupToken);
        }

        public async Task<List<ProductGroup>> GetProductGroups()
        {
            return await _productGroupRepository.ProductGroups.ToListAsync();
        }

        public async Task<List<ProductGroup>> GetProductGroupsByProfileId(int profileId)
        {
            return await _productGroupRepository.ProductGroups.Where(x => x.ProfileId == profileId).ToListAsync();
        }

        public async Task<bool> UpdateProductGroup(ProductGroup productGroup)
        {
            productGroup.DateModified = DateTimeOffset.UtcNow;

            _productGroupRepository.ProductGroups.Update(productGroup);
            await _productGroupRepository.SaveChangesAsync();

            return true;
        }

    }
}
