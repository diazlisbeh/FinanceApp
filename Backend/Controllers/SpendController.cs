using Backend.Models;
using Backend.Services;

using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
public class SpendController : ControllerBase
{
    private ISpendService _service;
    private IConfiguration _config;
    public SpendController(ISpendService service, IConfiguration config){
        _service = service;
        _config = config;
    }

    [HttpPost]
    public IActionResult PostSpend(Spend spend) => Ok(_service.CreateSpend(spend));

    [HttpGet]
    public IActionResult GetUserSpend(int UserId){
        return Ok(_service.GetUserSpends(UserId));
    }
  

  
}