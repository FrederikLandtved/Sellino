using Microsoft.AspNetCore.Authentication.JwtBearer;
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
        private readonly UserHelper _userHelper;

        public ProductController(IProductService productService, UserHelper userHelper)
        {
            _productService = productService;
            _userHelper = userHelper;
        }

        [HttpGet]
        [Route("/Products/")]
        public async Task<IActionResult> GetAll()
        {
            var userId = _userHelper.GetUserId();

            var products = JsonSerializer.Serialize(await _productService.GetProducts());

            return Ok(products);
        }

        [HttpGet]
        [Route("/Products/{productToken}")]
        public async Task<IActionResult> GetProduct(Guid productToken)
        {
            var products = JsonSerializer.Serialize(await _productService.GetProduct(productToken));

            return Ok(products);
        }

        [HttpGet]
        [Route("/ProductGroups/{productGroupToken}/Products")]
        public async Task<IActionResult> GetProductsFromProductGroup(Guid productGroupToken)
        {
            var products = JsonSerializer.Serialize(await _productService.GetProductsFromProductGroup(productGroupToken));

            return Ok(products);
        }

        [HttpPost]
        [Route("/Products")]
        public async Task<IActionResult> CreateProduct([FromBody]CreateProductModel model)
        {
            var userId = _userHelper.GetUserId();

            int productId = await _productService.CreateProduct(model.Name, model.Description, model.Price, model.ProductGroupId, userId);
            return Ok(new { ProductId = productId });
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
