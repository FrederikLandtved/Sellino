using Microsoft.AspNetCore.Mvc;
using Sellino.API.Constants;

namespace Sellino.API.Helpers
{
    public class UserHelper : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public UserHelper(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public int GetUserId()
        {
            int userId = 0;

            var user = _httpContextAccessor.HttpContext.User;

            if (!user.Claims.Any())
                return userId;

            string userIdClaim = user.Claims.First(x => x.Type == ClaimConstants.UserId).Value;  
            int.TryParse(userIdClaim, out userId);
            
            return userId;
        }

        public string GetEmail()
        {
            var user = _httpContextAccessor.HttpContext.User;
            string emailClaim = user.Claims.First(x => x.Type == ClaimConstants.Email).Value;

            return emailClaim;
        }

        public string GetFirstName()
        {
            var user = _httpContextAccessor.HttpContext.User;
            string firstNameClaim = user.Claims.First(x => x.Type == ClaimConstants.FirstName).Value;

            return firstNameClaim;
        }
    }
}
