using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sellino.Domain.Migrations.ProfilePageSectionDb
{
    /// <inheritdoc />
    public partial class pagesections : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProfilePageSections",
                columns: table => new
                {
                    ProfilePageSectionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProfilePageSectionToken = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProfilePageId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProfilePageSectionType = table.Column<int>(type: "int", nullable: false),
                    DataId = table.Column<int>(type: "int", nullable: false),
                    SortIndex = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfilePageSections", x => x.ProfilePageSectionId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProfilePageSections");
        }
    }
}
