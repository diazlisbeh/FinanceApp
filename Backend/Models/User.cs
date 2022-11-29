using System;

namespace Backend.Models;


public class User 
{
    public int Id { get; set; }
    public string Name{ get; set; } 
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password{ get; set; }
    public float Capital{ get; set; }
    public Status Status {get;set;}
    public virtual ICollection<Spend> Spends { get; set; }
    public virtual ICollection<Budget> Budgets{ get; set; }
    public virtual ICollection<Income> Incomes {get;set;}
}


