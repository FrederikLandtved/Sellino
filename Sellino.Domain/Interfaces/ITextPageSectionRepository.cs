using Sellino.Domain.Models;

namespace Sellino.Domain.Interfaces
{
    public interface ITextPageSectionRepository
    {
        Task<int> CreateTextPageSection(TextPageSection textPageSection);
        Task<TextPageSection> GetTextPageSection(int textPageSectionId);
    }
}
