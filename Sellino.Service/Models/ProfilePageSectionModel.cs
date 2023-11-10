namespace Sellino.Service.Models
{
    public class ProfilePageSectionModel
    {
        public int ProfilePageSectionId { get; set; }
        public Guid ProfilePageSectionToken { get; set; }
        public int ProfilePageId { get; set; }
        public string Name { get; set; }
        public int ProfilePageSectionType { get; set; }
        public int DataId { get; set; }
        public int SortIndex { get; set; }
    }
}
