using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Models;

namespace Sellino.Domain.Context
{
    public class ProductVariantDbContext : DbContext
    {
        public ProductVariantDbContext(DbContextOptions<ProductVariantDbContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                var connectionString = configuration.GetConnectionString("DefaultConnection");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        public DbSet<ProductVariant> ProductVariants { get; set; }
    }
}
