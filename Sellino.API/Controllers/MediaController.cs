using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Helpers;

namespace Sellino.API.Controllers
{
    //[Authorize]
    [Route("[controller]")]
    [ApiController]
    public class MediaController : ControllerBase
    {
        private readonly UserHelper _userHelper;

        public MediaController(UserHelper userHelper)
        {
            _userHelper = userHelper;
        }


        [HttpPost]
        [Route("Upload")]
        public async Task<IActionResult> UploadMedia(IFormFile file)
        {
            using (var ms = new MemoryStream())
            {
                file.CopyTo(ms);
                var fileBytes = ms.ToArray();

                string s = Convert.ToBase64String(fileBytes);
                using var client = new HttpClient();
                string url = "https://api.imgbb.com/1/upload?key=fb7f06d6a3f5ab8733367b4e41b34c59";
                Dictionary<string, string> keyValuePairs = new Dictionary<string, string>()
                {
                    { "image", s}
                };
                HttpContent formContent = new FormUrlEncodedContent(keyValuePairs);
                var response = await client.PostAsync(url, formContent);

                var responseString = await response.Content.ReadAsStringAsync();

                return Ok(responseString);
                // act on the Base64 data
            }
            return Ok();
        }
    }
}
