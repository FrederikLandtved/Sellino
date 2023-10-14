using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Helpers;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductVariantController : ControllerBase
    {
        private readonly IProductVariantService _productVariantService;

        public ProductVariantController(IProductVariantService productVariantService)
        {
            _productVariantService = productVariantService;
        }

        [HttpGet]
        [Route("/ProductVariants/")]
        public async Task<IActionResult> GetAll()
        {
            List<ProductVariantModel> productVariants = await _productVariantService.GetProductVariants();

            return Ok(productVariants);
        }
    }
}
