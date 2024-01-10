using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class OrderModel
    {
        public int OrderId { get; set; }
        public Guid OrderToken { get; set; }
        public int ProfileId { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }
        public int FullPrice { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
        public bool IsCompleted { get; set; }
    }

    public class CreateOrderModel
    {
        public int ProfileId { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
    }
}