using Sellino.Domain.Models;

namespace Sellino.Service.Interfaces
{
    public interface IUserService
    {
        Task<int> CreateUser(string email, string password, string firstName, string lastName);
        Task<User> Login(string email, string password);
        Task<bool> UserExists(string email);
        bool VerifyPassword(string hashedPassword, string attemptedPassword);
    }
}
