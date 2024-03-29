﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Sellino.Domain.Context;

#nullable disable

namespace Sellino.Domain.Migrations.ProfilePageSectionDb
{
    [DbContext(typeof(ProfilePageSectionDbContext))]
    [Migration("20231109082258_pagesections")]
    partial class pagesections
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Sellino.Domain.Models.ProfilePageSection", b =>
                {
                    b.Property<int>("ProfilePageSectionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProfilePageSectionId"));

                    b.Property<int>("DataId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProfilePageId")
                        .HasColumnType("int");

                    b.Property<Guid>("ProfilePageSectionToken")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("ProfilePageSectionType")
                        .HasColumnType("int");

                    b.Property<int>("SortIndex")
                        .HasColumnType("int");

                    b.HasKey("ProfilePageSectionId");

                    b.ToTable("ProfilePageSections");
                });
#pragma warning restore 612, 618
        }
    }
}
