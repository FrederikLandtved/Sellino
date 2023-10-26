namespace Sellino.Service.Models
{
    public class ProfilePageModel
    {
        public int ProfilePageId { get; set; }
        public Guid ProfilePageToken { get; set; }
        public int ProfileId { get; set; }
        public string Name { get; set; }
        public bool IsFrontpage { get; set; }
    }
}
