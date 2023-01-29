using Backend.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Backend.Controllers;
[EnableCors("WebPolicy")]
[ApiController]
[Route("[controller]")]
public class IncomeController : ControllerBase
{
    private IInconmeService _service;
    private IConfiguration _config;
    public IncomeController(IInconmeService service, IConfiguration config){
        _service = service;
        _config = config;
    }

    [HttpPost]
    public IActionResult setIncome( string email, float amount){
       
        return Ok(_service.Add(email,amount));  
    }

    [HttpGet("GetAll")]
    public IActionResult GetAll(){
        return Ok(_service.GetAll());
    }
    [HttpGet("Get")]
    public IActionResult Get(Guid id){
        return Ok(_service.Get(id));
    }

  
}