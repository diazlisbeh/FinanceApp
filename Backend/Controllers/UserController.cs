using System.Security.Cryptography;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Backend.DTOs;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Cors;


namespace Backend.Controllers
{ 
    [EnableCors("WebPolicy")]
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUserService _service;
        private IConfiguration _config;

        public UserController(IUserService service, IConfiguration config){
            _service = service;
            _config = config;
        }

        [HttpPost("register")]
        [EnableCors]
        public IActionResult Register(UserRegisterDto userDto){
            
             _service.Register(userDto);
             return StatusCode(301);
        }

        [HttpGet]
        // [EnableCors]
        public IActionResult GetAll (){
            return Ok(_service.GetUsers());
            
        }
        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] int  id)
        {
            return Ok(_service.GetUser(id));
        }

        [HttpPost("login")]
        
        public async Task<IActionResult> Login (UserLoginDto userLogin){
            var userRepo = await _service.Login(userLogin.email,userLogin.password);
            if(userRepo is null)return Unauthorized();

            var Claims = new []{
                new Claim(ClaimTypes.NameIdentifier,userRepo.Id.ToString()),
                new Claim(ClaimTypes.Email,userRepo.Email)
            }; 

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var Card = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var TokenDescription = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(Claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = Card,
                
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(TokenDescription);
            return Ok(new{
                token = tokenHandler.WriteToken(token),
                userRepo.Name,
                userRepo.Capital,
                userRepo.Id,
                userRepo.LastName,
                userRepo.Email,
                userRepo.Status,
                userRepo.Spends,
                userRepo.Budgets,
                userRepo.Incomes

            });

            
            
            
        }

    }
}