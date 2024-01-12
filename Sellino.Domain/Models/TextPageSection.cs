using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class TextPageSection
    {
        [Key]
        public int TextPageSectionId { get; set; }
        public Guid TextPageSectionToken { get; set; }
        public string Content { get; set; }
    }
}
