using System.Security.Cryptography;
using Backend.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Backend.DTOs;

namespace Backend.Services;


public class UserService : IUserService
{
    private FinanceContext _context;
    public UserService(FinanceContext context){
        _context = context;
    }

    public  List<User> GetUsers()
    {   
        List<User> user =  _context.users.ToList();
        return user;
    }
    public  async Task<User> GetUser(int id)
    {   
        var user = await _context.users.FirstOrDefaultAsync(x => x.Id == id);
        return user;
    }

    public User Register(UserRegisterDto userDto)
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


    public async Task<User> Login (string email, string password){

        var user = await _context.users.FirstOrDefaultAsync(usr => usr.Email == email);
        if(user is null) 
        {return null;}
        if(!VerifyPassword(password,user.PasswordSalt,user.Password)){ return null;}
        return user;
    }


    private void CreatePassword(string password, out byte[] passwordHash, out byte[] passwordSalt){
        using(var hmac = new HMACSHA512()){
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
    }


    private bool VerifyPassword(string password, byte[] passwordSalt, byte[] passwordHash){
        using(var hmac = new HMACSHA512(passwordSalt)){
          
          var ComputeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

          for(int i=0; i<ComputeHash.Length;i++){
            
            if(ComputeHash[i] != passwordHash[i]){
                return false;
            }
          } 
          return true; 
        }
    }

}