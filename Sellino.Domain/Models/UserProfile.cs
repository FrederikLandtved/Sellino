using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    [Keyless]
    public class UserProfile
    {
        public int ProfileId { get; set; }
        public int UserId { get; set; }
        public int CreatedByUserId { get; set; }
    }
}
