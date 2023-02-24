namespace Backend.DAL.Models

{
    public class Spend
    {
        public Guid SpendID { get; set; }
        public float Amount{ get; set; }
        public CategoriesEnum CategoryID { get; set; }
        public int UserID{ get; set; }
        public DateTime Date { get; set; }
        public string? Porpuse{ get; set; }
        public virtual Category? Category {get; set;}
        public virtual User? User{ get; set; }
        

    }
}