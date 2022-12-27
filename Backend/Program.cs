using Backend.Filter;
using Backend.Models;
using Backend.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("my");
//Dependy Injection to Database
builder.Services.AddDbContext<FinanceContext>(options =>{
    options.UseMySql(connectionString,ServerVersion.AutoDetect(connectionString));
});

//Add Filters
builder.Services.AddMvc(options =>{
    options.Filters.Add<JsonExceptionFilter>();
    // options.Filters.Add<RequiredHttpsOrCloseAttribute>();
});



//Add Authorization
//builder.Services.AddAuthentication(JwtBearerDefaults.Authentication)

builder.Services.AddScoped<IUserService, UserService>();
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
