using AutoMapper;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class ProductGroupService : IProductGroupService
    {
        private readonly IProductGroupRepository _productGroupRepository;
        private readonly IProfileRepository _profileRepository;
        private readonly IMapper _autoMapper;
        public ProductGroupService(IProductGroupRepository productGroupRepository, IMapper autoMapper, IProfileRepository profileRepository)
        {
            _productGroupRepository = productGroupRepository;
            _autoMapper = autoMapper;
            _profileRepository = profileRepository;
        }

        public async Task<int> CreateProductGroup(string name, int profileId)
        {
            ProductGroup productGroup = new ProductGroup
            {
                ProductGroupToken = Guid.NewGuid(),
                Name = name,
                ProfileId = profileId,
                CreatedByUserId = 1,
                DateCreated = DateTimeOffset.UtcNow,
                IsDeleted = false
            };

            return await _productGroupRepository.CreateProductGroup(productGroup);
        }

        public async Task<bool> DeleteProductGroup(Guid productGroupToken)
        {
            return await _productGroupRepository.DeleteProductGroup(productGroupToken);
        }

        public async Task<ProductGroupModel> GetProductGroup(Guid productGroupToken)
        {
            ProductGroup productGroup = await _productGroupRepository.GetProductGroup(productGroupToken);
            ProductGroupModel model = _autoMapper.Map<ProductGroupModel>(productGroup);

            return model;
        }

        public async Task<ProductGroupModel> GetProductGroup(int productGroupId)
        {
            ProductGroup productGroup = await _productGroupRepository.GetProductGroup(productGroupId);
            ProductGroupModel model = _autoMapper.Map<ProductGroupModel>(productGroup);

            return model;
        }

        public async Task<List<ProductGroupModel>> GetProductGroups()
        {
            List<ProductGroup> productGroups = await _productGroupRepository.GetProductGroups();
            List<ProductGroupModel> productGroupModels = _autoMapper.Map<List<ProductGroup>, List<ProductGroupModel>>(productGroups);

            return productGroupModels;
        }

        public async Task<List<ProductGroupModel>> GetProductGroupsByProfile(Guid profileToken)
        {
            Sellino.Domain.Models.Profile profile = await _profileRepository.GetProfile(profileToken);
            int profileId = profile.ProfileId;

            List<ProductGroup> productGroups = await _productGroupRepository.GetProductGroupsByProfileId(profileId);
            List<ProductGroupModel> productGroupModels = _autoMapper.Map<List<ProductGroup>, List<ProductGroupModel>>(productGroups);

            return productGroupModels;
        }


        public async Task<bool> UpdateProductGroup(ProductGroupModel productGroup)
        {
            ProductGroup productGroupToUpdate = await _productGroupRepository.GetProductGroup(productGroup.ProductGroupToken);

            productGroupToUpdate.Name = productGroup.Name;

            return await _productGroupRepository.UpdateProductGroup(productGroupToUpdate);
        }
    }
}
