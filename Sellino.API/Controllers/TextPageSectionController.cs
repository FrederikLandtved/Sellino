using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Helpers;
using Sellino.API.Models.Product;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TextPageSectionController : ControllerBase
    {
        private readonly UserHelper _userHelper;
        private readonly ITextPageSectionService _textPageSectionService;

        public TextPageSectionController(UserHelper userHelper, ITextPageSectionService textPageSectionService)
        {
            _userHelper = userHelper;
            _textPageSectionService = textPageSectionService;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("/TextPageSections")]
        public async Task<IActionResult> CreateTextPageSection(CreateTextPageSectionModel model)
        {
            int textPageSectionId = await _textPageSectionService.CreateTextPageSection(model);

            return Ok(textPageSectionId);
        }

        [HttpGet]
        [Route("/TextPageSections/{textPageSectionId}")]
        public async Task<IActionResult> GetTextPageSection(int textPageSectionId)
        {
            TextPageSectionModel model = await _textPageSectionService.GetTextPageSection(textPageSectionId);

            return Ok(model);
        }
    }
}
