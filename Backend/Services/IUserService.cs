using Backend.Models;

namespace Backend.Services;

public interface IUserService{

    public User Register(UserDto userDto);
}