
using System.ComponentModel.DataAnnotations;

namespace Sellino.API.Models.Media
{
    public class CreateMediaModel
    {
        [Required]
        public IFormFile File { get; set; }
    }
}
