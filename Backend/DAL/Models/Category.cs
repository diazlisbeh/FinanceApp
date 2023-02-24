namespace Backend.DAL.Models
{
    public class Category {
        public int Id{ get; set; }
        public string? Name{ get; set; } 
        public string? Description {get;set;}
        public virtual ICollection<Spend>? Spends {get;set;}
        public virtual ICollection<Budget>? Budgets{ get; set; }
        public virtual ICollection<Movement>? Movements {get;set;}
    }
}


