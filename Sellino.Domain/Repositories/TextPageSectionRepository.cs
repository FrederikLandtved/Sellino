using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Migrations.UserDb;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class TextPageSectionRepository : ITextPageSectionRepository
    {
        TextPageSectionDbContext _textPageSectionRepository;

        public TextPageSectionRepository(TextPageSectionDbContext db)
        {
            _textPageSectionRepository = db;
        }

        public async Task<int> CreateTextPageSection(TextPageSection textPageSection)
        {
            await _textPageSectionRepository.TextPageSections.AddAsync(textPageSection);
            await _textPageSectionRepository.SaveChangesAsync();

            return textPageSection.TextPageSectionId;
        }

        public async Task<TextPageSection> GetTextPageSection(int textPageSectionId)
        {
            return await _textPageSectionRepository.TextPageSections.FirstAsync(x => x.TextPageSectionId == textPageSectionId);
        }
    }
}
