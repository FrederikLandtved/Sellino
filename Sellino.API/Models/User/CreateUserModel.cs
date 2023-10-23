using System.ComponentModel.DataAnnotations;

namespace Sellino.API.Models.User
{
    public class CreateUserModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        [Required]
        public bool CreateProfile { get; set; }
        public string ProfileName { get; set; }
    }
}
