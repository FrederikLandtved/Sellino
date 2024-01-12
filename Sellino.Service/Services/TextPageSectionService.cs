using AutoMapper;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class TextPageSectionService : ITextPageSectionService
    {
        private readonly ITextPageSectionRepository _textPageSectionRepository;

        public TextPageSectionService(ITextPageSectionRepository textPageSectionRepository)
        {
            _textPageSectionRepository = textPageSectionRepository;
        }

        public async Task<int> CreateTextPageSection(CreateTextPageSectionModel textPageSection)
        {
            TextPageSection textDto = new TextPageSection
            {
                TextPageSectionToken = Guid.NewGuid(),
                Content = textPageSection.Content
            };

            return await _textPageSectionRepository.CreateTextPageSection(textDto);
        }

        public async Task<TextPageSectionModel> GetTextPageSection(int textPageSectionId)
        {
            TextPageSection textPageSection = await _textPageSectionRepository.GetTextPageSection(textPageSectionId);
            TextPageSectionModel model = new TextPageSectionModel
            {
                TextPageSectionId = textPageSection.TextPageSectionId,
                TextPageSectionToken = textPageSection.TextPageSectionToken,
                Content = textPageSection.Content
            };

            return model;
        }
    }
}
