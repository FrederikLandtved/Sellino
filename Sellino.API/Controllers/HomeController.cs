using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Helpers;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly UserHelper _userHelper;

        public HomeController(UserHelper userHelper)
        {
            _userHelper = userHelper;
        }


        [HttpGet]
        [Route("/GetHomePage/")]
        public async Task<IActionResult> GetHomePage()
        {
            string firstName = _userHelper.GetFirstName();

            var model = new HomePageModel()
            {
                FirstName = firstName
            };

            return Ok(model);
        }

        public class HomePageModel
        {
            public string FirstName { get; set; }
        }
    }
}
