using Sellino.Domain.Models;

namespace Sellino.Service.Interfaces
{
    public interface ITextPageSectionService
    {
        Task<int> CreateTextPageSection(CreateTextPageSectionModel textPageSection);
        Task<TextPageSectionModel> GetTextPageSection(int textPageSectionId);
    }
}
