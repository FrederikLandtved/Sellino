namespace Sellino.API.Models.ProfilePageSection
{
    public class CreateProfilePageSectionModel
    {
        public string Name { get; set; }
        public int ProfilePageId { get; set; }
        public int ProfilePageSectionType { get; set; }
        public int DataId { get; set; }
        public int SortIndex { get; set; }
    }
}
