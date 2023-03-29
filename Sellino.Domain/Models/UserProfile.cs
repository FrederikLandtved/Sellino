using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class UserProfile
    {
        [Key]
        public int UserProfileId { get; set; }
        public int ProfileId { get; set; }
        public int UserId { get; set; }
        public int CreatedByUserId { get; set; }
    }
}
