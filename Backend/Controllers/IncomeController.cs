using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
public class IncomeController : ControllerBase
{
    private IInconmeService _service;
    public IncomeController(IInconmeService service){
        _service = service;
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