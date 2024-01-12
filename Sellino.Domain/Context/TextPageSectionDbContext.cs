﻿using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Models;

namespace Sellino.Domain.Context
{
    public class TextPageSectionDbContext : DbContext
    {
        public TextPageSectionDbContext(DbContextOptions<TextPageSectionDbContext> options) : base(options)
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

        public DbSet<TextPageSection> TextPageSections { get; set; }
    }
}
