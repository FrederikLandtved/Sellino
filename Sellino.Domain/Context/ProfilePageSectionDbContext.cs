using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Models;

namespace Sellino.Domain.Context
{
    public class ProfilePageSectionDbContext : DbContext
    {
        public ProfilePageSectionDbContext(DbContextOptions<ProfilePageSectionDbContext> options) : base(options)
        {

        }

        public DbSet<ProfilePageSection> ProfilePageSections { get; set; }
    }
}
