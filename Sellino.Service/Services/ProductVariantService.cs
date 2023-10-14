using AutoMapper;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class ProductVariantService : IProductVariantService
    {
        private readonly IProductVariantRepository _productVariantRepository;
        private readonly IMapper _autoMapper;

        public ProductVariantService(IProductVariantRepository productVariantRepository, IMapper automapper)
        {
            _productVariantRepository = productVariantRepository;
            _autoMapper = automapper;
        }

        public async Task<int> CreateProductVariant(ProductVariantModel productVariant)
        {
            ProductVariant productVariantMap = _autoMapper.Map<ProductVariant>(productVariant);
            return await _productVariantRepository.CreateProductVariant(productVariantMap);
        }

        public async Task<List<ProductVariantModel>> GetProductVariants()
        {
            List<ProductVariant> productVariants = await _productVariantRepository.GetProductVariants();
            return _autoMapper.Map<List<ProductVariant>, List<ProductVariantModel>>(productVariants);
        }
    }
}
