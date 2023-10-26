using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Models;

namespace Sellino.Domain.Context
{
    public class ProfilePageDbContext : DbContext
    {
        public ProfilePageDbContext(DbContextOptions<ProfilePageDbContext> options) : base(options)
        {

        }

        public DbSet<ProfilePage> ProfilePages { get; set; }
    }
}
