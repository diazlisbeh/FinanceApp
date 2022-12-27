using System.Security.Cryptography;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;


namespace Backend.Controllers
{ [ApiController]
    [Route("[controller]")]
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

        [HttpGet]
        public IActionResult GetAll (){
            return Ok(_service.GetUsers());
            
        }
        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] int  id)
        {
            return Ok(_service.GetUser(id));
        }


    }
}