using System.Security.Cryptography;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;


namespace Backend.Controllers
{ [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private IUserService _service;

        public UserController(IUserService service){
            _service = service;
        }

        [HttpPost("register")]
        public IActionResult Register(UserDto userDto){
            
            return Ok( _service.Register(userDto));
        }



    }
}