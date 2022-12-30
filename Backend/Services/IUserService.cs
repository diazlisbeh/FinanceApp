using Backend.Models;
using Backend.DTOs;
namespace Backend.Services;

public interface IUserService{

    public User Register(UserRegisterDto userDto);

    // public List<User> GetUsers();
     List<User> GetUsers();
    Task<User>  GetUser(int id);
    Task<User> Login (string email, string password);
}