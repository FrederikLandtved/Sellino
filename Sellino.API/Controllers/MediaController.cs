using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Hosting.Internal;
using Sellino.API.Helpers;
using Sellino.API.Models.Media;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;

namespace Sellino.API.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class MediaController : ControllerBase
    {
        private readonly UserHelper _userHelper;
        private readonly IMediaService _mediaService;

        public MediaController(UserHelper userHelper, IMediaService mediaService)
        {
            _userHelper = userHelper;
            _mediaService = mediaService;
        }


        //[HttpPost]
        //[Route("Upload")]
        //public async Task<IActionResult> UploadMedia(IFormFile file)
        //{
        //    using (var ms = new MemoryStream())
        //    {
        //        file.CopyTo(ms);
        //        var fileBytes = ms.ToArray();

        //        string s = Convert.ToBase64String(fileBytes);
        //        using var client = new HttpClient();
        //        string url = "https://api.imgbb.com/1/upload?key=fb7f06d6a3f5ab8733367b4e41b34c59";
        //        Dictionary<string, string> keyValuePairs = new Dictionary<string, string>()
        //        {
        //            { "image", s}
        //        };
        //        HttpContent formContent = new FormUrlEncodedContent(keyValuePairs);
        //        var response = await client.PostAsync(url, formContent);

        //        var responseString = await response.Content.ReadAsStringAsync();

        //        return Ok(responseString);
        //        // act on the Base64 data
        //    }
        //    return Ok();
        //}

        [HttpPost("UploadFile")]
        public async Task<int> UploadFile([FromForm] CreateMediaModel model)
        {
            MediaModel mediaModel = new MediaModel();

            if (ModelState.IsValid && model.File.Length > 0)
            {
                using(var memoryStream = new MemoryStream())
                {
                    await model.File.CopyToAsync(memoryStream);
                    mediaModel.Type = model.File.ContentType;
                    mediaModel.Name = model.File.FileName;
                    mediaModel.MediaData = memoryStream.ToArray();
                }
            }

            int mediaId = await _mediaService.CreateMedia(mediaModel);
            return mediaId;
        }

        [HttpGet("{mediaId}")]
        public async Task<IActionResult> GetMedia(int mediaId)
        {
            var mediaModel = await _mediaService.GetMedia(mediaId);

            if (mediaModel == null)
            {
                return NotFound();
            }

            var base64MediaData = Convert.ToBase64String(mediaModel.MediaData);

            // Return the base64 encoded media data as part of the response
            return Ok(new
            {
                MediaId = mediaModel.MediaId,
                MediaToken = mediaModel.MediaToken,
                Name = mediaModel.Name,
                Type = mediaModel.Type,
                MediaData = base64MediaData,
                DateCreated = mediaModel.DateCreated
            });
        }
    }
}
