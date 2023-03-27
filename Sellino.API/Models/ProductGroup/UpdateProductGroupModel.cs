namespace Sellino.API.Models.Product
{
    public class UpdateProductGroupModel
    {
        public Guid ProductGroupToken { get; set; }
        public string Name { get; set; }
        public int ProfileId { get; set; }
    }
}
