namespace Sellino.Service.Models
{
    public class ProfileModel
    {
        public int ProfileId { get; set; }
        public Guid ProfileToken { get; set; }
        public string Name { get; set; }
        public string Bio { get; set; }
        public string BackgroundHexColor { get; set; }
        public string TextHexColor { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateModified { get; set; }
        public DateTimeOffset DateDeleted { get; set; }
        public bool IsDeleted { get; set; }
    }
}
