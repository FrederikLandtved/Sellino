using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class Profile
    {
        [Key]
        public int ProfileId { get; set; }
        public Guid ProfileToken { get; set; }
        public string Name { get; set; }
        public string Bio { get; set; }
        public string BackgroundHexColor { get; set; }
        public string TextHexColor { get; set; }
        public int CreatedByUserId { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateModified { get; set; }
        public DateTimeOffset DateDeleted { get; set; }
        public bool IsDeleted { get; set; }
    }
}
