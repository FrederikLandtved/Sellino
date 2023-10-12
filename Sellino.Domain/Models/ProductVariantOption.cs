using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class ProductVariantOption
    {
        [Key]
        public int ProductVariantOptionId { get; set; }
        public int ProductVariantId { get; set; }
        public string Name { get; set; }
    }
}
