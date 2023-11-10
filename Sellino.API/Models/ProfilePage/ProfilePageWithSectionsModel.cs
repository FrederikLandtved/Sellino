using Sellino.Service.Models;

namespace Sellino.API.Models.Product
{
    public class ProfilePageWithSectionsModel
    {
        public ProfilePageModel ProfilePage { get; set; } = new ProfilePageModel();

        public List<ProfilePageSectionModel> Sections { get; set; } = new List<ProfilePageSectionModel>();
    }
}
