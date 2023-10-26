using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sellino.Domain.Migrations.ProfilePageDb
{
    /// <inheritdoc />
    public partial class addprofilepage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProfilePages",
                columns: table => new
                {
                    ProfilePageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProfilePageToken = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProfileId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsFrontpage = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfilePages", x => x.ProfilePageId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProfilePages");
        }
    }
}
