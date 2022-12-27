using System.Security.Cryptography;
using Backend.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services;


public class UserService : IUserService
{
    private FinanceContext _context;
    public UserService(FinanceContext context){
        _context = context;
    }

    public  async Task<IEnumerable<User>> GetUsers()
    {   
        var user = await _context.users.ToListAsync();
        return user;
    }
    public  async Task<User> GetUser(int id)
    {   
        var user = await _context.users.FirstOrDefaultAsync(x => x.Id == id);
        return user;
    }

    public User Register(UserDto userDto)

    {
        CreatePassword(userDto.password,out byte[] passwordHash, out byte[] passwordSalt);
        var user = new User(){
            Name= userDto.Name,
            LastName = userDto.LastName,
            Email = userDto.Email,
            Password = passwordHash,
            PasswordSalt = passwordSalt
        };

        _context.users.Add(user);
        _context.SaveChanges();
        return user;
    }

    private void CreatePassword(string password, out byte[] passwordHash, out byte[] passwordSalt){
        using(var hmac = new HMACSHA512()){
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
    }

}