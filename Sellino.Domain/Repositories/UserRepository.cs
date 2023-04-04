using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Migrations.UserDb;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class UserRepository : IUserRepository
    {
        UserDbContext _userRepository;

        public UserRepository(UserDbContext db)
        {
            _userRepository = db;
        }

        public async Task<int> CreateUser(User user)
        {
            if (await UserExists(user.Email))
                return 0;

            user.Password = HashPassword(user.Password);

            await _userRepository.Users.AddAsync(user);
            await _userRepository.SaveChangesAsync();

            return user.UserId;
        }

        public async Task<User> Login(string email, string password)
        {
            User user = await _userRepository.Users.FirstOrDefaultAsync(x => x.Email == email);

            if (user == null)
                return null;

            if (VerifyPassword(user.Password, password))
                return user;

            return null;
        }

        public async Task<bool> UserExists(string email)
        {
            return await _userRepository.Users.AnyAsync(x => x.Email == email);
        }

        public bool VerifyPassword(string hashedPassword, string attemptedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(attemptedPassword, hashedPassword);
        }

        public string HashPassword(string passwordToHash)
        {
            return BCrypt.Net.BCrypt.HashPassword(passwordToHash);
        }

    }
}
