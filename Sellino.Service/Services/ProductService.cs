using AutoMapper;
using Microsoft.Extensions.Configuration;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly IProductGroupRepository _productGroupRepository;
        private readonly IMapper _autoMapper;
        private readonly IMediaService _mediaService;
        public ProductService(IProductRepository productRepository, IMapper autoMapper, IProductGroupRepository productGroupRepository, IMediaService mediaService)
        {
            _productRepository = productRepository;
            _autoMapper = autoMapper;
            _productGroupRepository = productGroupRepository;
            _mediaService = mediaService;
        }

        public async Task<int> CreateProduct(string name, string description, int price, int productGroupId, int productMediaId, int createdByUserId)
        {
            Product product = new Product
            {
                Name = name,
                ProductGroupId = productGroupId,
                ProductToken = Guid.NewGuid(),
                Price = price,
                CreatedByUserId = createdByUserId,
                DateCreated = DateTimeOffset.UtcNow,
                Description = description,
                IsDeleted = false,
                ProductMediaId = productMediaId
            };

            return await _productRepository.CreateProduct(product);
        }

        public async Task<bool> DeleteProduct(Guid productToken)
        {
            return await _productRepository.DeleteProduct(productToken);
        }

        public async Task<ProductModel> GetProduct(Guid productToken)
        {
            Product product = await _productRepository.GetProduct(productToken);
            ProductModel model = _autoMapper.Map<ProductModel>(product);

            return model;
        }

        public async Task<List<ProductModel>> GetProducts()
        {
            List<Product> products = await _productRepository.GetProducts();
            List<ProductModel> productModels = _autoMapper.Map<List<Product>, List<ProductModel>>(products);

            return productModels;
        }

        public async Task<List<ProductModel>> GetProductsFromProductGroup(int productGroupId)
        {
            List<Product> products = await _productRepository.GetProductsByProductGroupId(productGroupId);
            List<ProductModel> productModels = _autoMapper.Map<List<Product>, List<ProductModel>>(products);

            foreach (var productModel in productModels)
            {
                if (productModel.ProductMediaId > 0)
                {
                    MediaModel mediaModel = await _mediaService.GetMedia(productModel.ProductMediaId);
                    productModel.ProductMedia = mediaModel;
                }
            }

            return productModels;
        }

        public async Task<List<ProductModel>> GetProductsFromProductGroup(Guid productGroupToken)
        {
            ProductGroup productGroup = await _productGroupRepository.GetProductGroup(productGroupToken);
            int productGroupId = productGroup.ProductGroupId;

            List<Product> products = await _productRepository.GetProductsByProductGroupId(productGroupId);
            List<ProductModel> productModels = _autoMapper.Map<List<Product>, List<ProductModel>>(products);

            return productModels;
        }


        public async Task<bool> UpdateProduct(ProductModel product)
        {
            Product productToUpdate = await _productRepository.GetProduct(product.ProductToken);

            productToUpdate.Description = product.Description;
            productToUpdate.Name = product.Name;
            productToUpdate.Price = product.Price;
            productToUpdate.ProductGroupId = product.ProductGroupId;

            return await _productRepository.UpdateProduct(productToUpdate);
        }
    }
}
