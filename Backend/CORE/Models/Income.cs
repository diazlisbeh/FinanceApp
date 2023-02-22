namespace Backend.Models
{
    public class Income
    {
        public Guid IncomeID{ get; set; }
        public float Amount{ get; set; }
        public int UserID{ get; set; }
        public DateTime DateIncome{ get; set; }
        public virtual User? User {get;set;}  
    }
}