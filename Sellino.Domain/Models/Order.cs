using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public Guid OrderToken { get; set; }
        public int ProfileId { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
        public bool IsCompleted { get; set; }
    }
}
