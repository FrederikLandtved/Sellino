using Sellino.Service.Models;

namespace Sellino.API.Models.Product
{
    public class ProfileWithProductsModel
    {
        public ProfileModel Profile { get; set; } = new ProfileModel();
        public List<ProductModel> Products { get; set; } = new List<ProductModel>();
    }
}
