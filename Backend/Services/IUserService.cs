using Backend.Models;

namespace Backend.Services;

public interface IUserService{

    public User Register(UserDto userDto);

    // public List<User> GetUsers();
     Task<IEnumerable<User>> GetUsers();
    Task<User>  GetUser(int id);
}