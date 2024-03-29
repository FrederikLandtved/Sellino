﻿using System.ComponentModel.DataAnnotations;

namespace Sellino.Domain.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public Guid ProductToken { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ProductGroupId { get; set; }
        public int CreatedByUserId { get; set; }
        public int Price { get; set; }
        public int? ProductMediaId { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateModified { get; set; }
        public DateTimeOffset DateDeleted { get; set; }
        public bool IsDeleted { get; set; }
    }
}
