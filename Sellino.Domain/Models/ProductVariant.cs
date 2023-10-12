using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class ProductVariant
    {
        [Key]
        public int ProductVariantId { get; set; }
        public string Name { get; set; }
    }
}
