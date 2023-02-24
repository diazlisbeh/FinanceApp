using System.Text.Json.Serialization;
namespace Backend.DAL.Models;

public class User 
{
    public User()
    {
        Spends = new HashSet<Spend>();
        Budgets = new HashSet<Budget>();
        Incomes = new HashSet<Income>();
        Movements = new HashSet<Movement>();
    }
    
    public int Id { get; set; }
    public string? Name { get; set; } 
    public string? LastName { get; set; }
    public string? Email { get; set; } 
    public byte[]? Password { get; set; }
    public byte[]? PasswordSalt { get; set; }
    public decimal Capital{ get; set; }
    public Status Status {get;set;}
    // [JsonIgnore]
    public virtual ICollection<Spend>? Spends { get; set; }
    // [JsonIgnore]
    public virtual ICollection<Budget> Budgets { get; set; }
    // [JsonIgnore]
     public virtual ICollection<Income> Incomes {get;set;}
     public virtual ICollection<Movement> Movements {get;set;}
}


