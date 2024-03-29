﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Helpers;
using Sellino.API.Models.Product;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using Sellino.Service.Services;
using System.Security.Claims;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IProductGroupService _productGroupService;
        private readonly UserHelper _userHelper;

        public ProductController(IProductService productService, UserHelper userHelper, IProductGroupService productGroupService)
        {
            _productService = productService;
            _userHelper = userHelper;
            _productGroupService = productGroupService;
        }

        [HttpGet]
        [Route("/Products/")]
        public async Task<IActionResult> GetAll()
        {
            var userId = _userHelper.GetUserId();
            var profileId = _userHelper.GetProfileId();
            List<ProductModel> products = new List<ProductModel>();
            List<ProductGroupModel> productGroups = await _productGroupService.GetProductGroupsByProfileId(profileId);

            foreach(ProductGroupModel model in productGroups)
            {
                products.AddRange(await _productService.GetProductsFromProductGroup(model.ProductGroupId));
            }

            products = products.OrderBy(x => x.ProductId).ToList();

            return Ok(JsonSerializer.Serialize(products));
        }

        [HttpGet]
        [Route("/Products/{productToken}")]
        public async Task<IActionResult> GetProduct(Guid productToken)
        {
            var products = JsonSerializer.Serialize(await _productService.GetProduct(productToken));

            return Ok(products);
        }

        //[HttpGet]
        //[Route("/ProductGroups/{productGroupId}/Products")]
        //public async Task<IActionResult> GetProductsFromProductGroup(int productGroupId)
        //{
        //    var products = JsonSerializer.Serialize(await _productService.GetProductsFromProductGroup(productGroupId));

        //    return Ok(products);
        //}

        [HttpGet]
        [Route("/ProductGroups/{productGroupId}/Products")]
        public async Task<IActionResult> GetProductGroupWithProducts(int productGroupId)
        {
            var model = new {
                ProductGroup = await _productGroupService.GetProductGroup(productGroupId),
                Products = await _productService.GetProductsFromProductGroup(productGroupId)
            };

            return Ok(JsonSerializer.Serialize(model));
        }

        [HttpPost]
        [Route("/Products")]
        public async Task<IActionResult> CreateProduct([FromBody]CreateProductModel model)
        {
            var userId = _userHelper.GetUserId();

            int productId = await _productService.CreateProduct(model.Name, model.Description, model.Price, model.ProductGroupId, model.ProductMediaId, userId);
            return Ok(productId);
        }

        [HttpDelete]
        [Route("/Products/{productToken}")]
        public async Task<IActionResult> DeleteProduct(Guid productToken)
        {
            await _productService.DeleteProduct(productToken);
            return Ok();
        }

        [HttpPut]
        [Route("/Products/{productToken}")]
        public async Task<IActionResult> UpdateProduct(Guid productToken, [FromBody]CreateProductModel model)
        {
            ProductModel productModel = new ProductModel
            {
                ProductToken = productToken,
                Name = model.Name,
                Description = model.Description,
                Price = model.Price,
                ProductGroupId = model.ProductGroupId
            };

            await _productService.UpdateProduct(productModel);
            return Ok();
        }
    }
}
