using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;

namespace Sellino.Service.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<int> CreateUser(string email, string password, string firstName, string lastName)
        {
            User newUser = new User { 
                Email = email, 
                Password = password, 
                FirstName = firstName, 
                LastName = lastName 
            };

            return await _userRepository.CreateUser(newUser);
        }

        public async Task<User> Login(string email, string password)
        {
            return await _userRepository.Login(email, password);
        }

        public async Task<bool> UserExists(string email)
        {
            return await _userRepository.UserExists(email);
        }

        public bool VerifyPassword(string hashedPassword, string attemptedPassword)
        {
            return _userRepository.VerifyPassword(hashedPassword, attemptedPassword);
        }
    }
}
