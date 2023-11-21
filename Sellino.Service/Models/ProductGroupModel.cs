using System.ComponentModel.DataAnnotations;

namespace Sellino.Service.Models
{
    public class ProductGroupModel
    {
        [Key]
        public int ProductGroupId { get; set; }
        public Guid ProductGroupToken { get; set; }
        public int ProfileId { get; set; }
        public string Name { get; set; }
        public int ProductGroupTypeId { get; set; }
        public int CreatedByUserId { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateModified { get; set; }
        public DateTimeOffset DateDeleted { get; set; }
        public bool IsDeleted { get; set; }
    }
}