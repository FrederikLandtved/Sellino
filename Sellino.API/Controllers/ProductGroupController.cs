using Microsoft.AspNetCore.Mvc;
using Sellino.API.Models.Product;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductGroupController : ControllerBase
    {
        private readonly IProductGroupService _productGroupService;

        public ProductGroupController(IProductGroupService productGroupService)
        {
            _productGroupService = productGroupService;
        }

        [HttpGet]
        [Route("/ProductGroups/")]
        public async Task<IActionResult> GetAll()
        {
            var productGroups = JsonSerializer.Serialize(await _productGroupService.GetProductGroups());

            return Ok(productGroups);
        }

        [HttpGet]
        [Route("/ProductGroups/{productGroupToken}")]
        public async Task<IActionResult> GetProductGroup(Guid productGroupToken)
        {
            var productGroups = JsonSerializer.Serialize(await _productGroupService.GetProductGroup(productGroupToken));

            return Ok(productGroups);
        }

        [HttpGet]
        [Route("/Profiles/{profileToken}/ProductGroups")]
        public async Task<IActionResult> GetProductGroupsByProfile(Guid profileToken)
        {
            var productGroups = JsonSerializer.Serialize(await _productGroupService.GetProductGroupsByProfile(profileToken));

            return Ok(productGroups);
        }

        [HttpPost]
        [Route("/ProductGroups")]
        public async Task<IActionResult> CreateProductGroup([FromBody]CreateProductGroupModel model)
        {
            int productGroupId = await _productGroupService.CreateProductGroup(model.Name, model.ProfileId);
            return Ok(new { ProductGroupId = productGroupId });
        }

        [HttpDelete]
        [Route("/ProductGroups/{productGroupToken}")]
        public async Task<IActionResult> DeleteProductGroup(Guid productGroupToken)
        {
            await _productGroupService.DeleteProductGroup(productGroupToken);
            return Ok();
        }

        [HttpPut]
        [Route("/ProductGroups/{productGroupToken}")]
        public async Task<IActionResult> UpdateProductGroup(Guid productGroupToken, [FromBody] UpdateProductGroupModel model)
        {
            ProductGroupModel productGroupModel = new ProductGroupModel
            {
                ProductGroupToken = productGroupToken,
                Name = model.Name
            };

            await _productGroupService.UpdateProductGroup(productGroupModel);
            return Ok();
        }
    }
}
