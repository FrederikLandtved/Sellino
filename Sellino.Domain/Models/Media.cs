using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class Media
    {
        [Key]
        public int MediaId { get; set; }
        public Guid MediaToken { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public byte[] MediaData { get; set; }
        public DateTimeOffset DateCreated { get; set; }
    }
}
