﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Sellino.Domain.Context;

#nullable disable

namespace Sellino.Domain.Migrations.ProfilePageDb
{
    [DbContext(typeof(ProfilePageDbContext))]
    [Migration("20231026132212_addprofilepage")]
    partial class addprofilepage
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Sellino.Domain.Models.ProfilePage", b =>
                {
                    b.Property<int>("ProfilePageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProfilePageId"));

                    b.Property<bool>("IsFrontpage")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProfileId")
                        .HasColumnType("int");

                    b.Property<Guid>("ProfilePageToken")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ProfilePageId");

                    b.ToTable("ProfilePages");
                });
#pragma warning restore 612, 618
        }
    }
}