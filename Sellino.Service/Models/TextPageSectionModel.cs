using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class TextPageSectionModel
    {
        public int TextPageSectionId { get; set; }
        public Guid TextPageSectionToken { get; set; }
        public string Content { get; set; }
    }

    public class CreateTextPageSectionModel
    {
        public string Content { get; set; }
    }
}