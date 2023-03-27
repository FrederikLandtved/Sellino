using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Models;

namespace Sellino.Domain.Context
{
    public class ProductGroupDbContext : DbContext
    {
        public ProductGroupDbContext(DbContextOptions<ProductGroupDbContext> options) : base(options)
        {

        }

        //public ProductDbContext()
        //{

        //}

        public DbSet<ProductGroup> ProductGroups { get; set; }
    }
}
