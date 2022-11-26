using Microsoft.EntityFrameworkCore;


namespace Backend.Models
{
    public class FinanceContext : DbContext
    {


        public DbSet<User> Users {get;set;}
        public DbSet<Category> Categories{get;set;}
        public DbSet<Spend> Spends{get;set;}
        public DbSet<Income> Incomes{get;set;}
        public DbSet<Budget> Budgets{get;set;}
        public FinanceContext(DbContextOptions<FinanceContext> options) :base(options){}


        
    }
}