using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sellino.Domain.Migrations.ProfileDb
{
    /// <inheritdoc />
    public partial class ChangeProfileColorNamings : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TextHexColor",
                table: "Profiles",
                newName: "TextOnSecondaryCompanyHexColor");

            migrationBuilder.RenameColumn(
                name: "BackgroundHexColor",
                table: "Profiles",
                newName: "TextOnCompanyHexColor");

            migrationBuilder.AddColumn<string>(
                name: "CompanyHexColor",
                table: "Profiles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DarkCompanyHexColor",
                table: "Profiles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SecondaryCompanyHexColor",
                table: "Profiles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyHexColor",
                table: "Profiles");

            migrationBuilder.DropColumn(
                name: "DarkCompanyHexColor",
                table: "Profiles");

            migrationBuilder.DropColumn(
                name: "SecondaryCompanyHexColor",
                table: "Profiles");

            migrationBuilder.RenameColumn(
                name: "TextOnSecondaryCompanyHexColor",
                table: "Profiles",
                newName: "TextHexColor");

            migrationBuilder.RenameColumn(
                name: "TextOnCompanyHexColor",
                table: "Profiles",
                newName: "BackgroundHexColor");
        }
    }
}
