namespace Sellino.API.Models.Product
{
    public class CreateProductModel
    {
        public Guid ProductToken { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int ProductGroupId { get; set; }
        public int ProductMediaId { get; set; }
    }
}
