using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sellino.Domain.Migrations.ProfileDb
{
    /// <inheritdoc />
    public partial class darkcompanycolorhex : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TextOnDarkCompanyHexColor",
                table: "Profiles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TextOnDarkCompanyHexColor",
                table: "Profiles");
        }
    }
}
