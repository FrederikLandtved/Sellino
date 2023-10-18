using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Models;

namespace Sellino.Domain.Context
{
    public class MediaDbContext : DbContext
    {
        public MediaDbContext(DbContextOptions<MediaDbContext> options) : base(options)
        {

        }

        public DbSet<Media> Media { get; set; }
    }
}
