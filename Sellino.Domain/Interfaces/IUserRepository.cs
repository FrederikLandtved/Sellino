using Sellino.Domain.Models;

namespace Sellino.Domain.Interfaces
{
    public interface IUserRepository
    {
        Task<int> CreateUser(User user);
        Task<User> Login(string email, string password);
        Task<bool> UserExists(string email);
        bool VerifyPassword(string hashedPassword, string attemptedPassword);
    }
}
