using Microsoft.EntityFrameworkCore;
using System.Text.Json;


namespace Backend.Models
{
    public class FinanceContext : DbContext
    {
        private IConfiguration _config;
        public DbSet<User> users {get;set;}
        public DbSet<Category> Categories{get;set;}
        public DbSet<Spend> Spends{get;set;}
        public DbSet<Income> Incomes{get;set;}
        public DbSet<Budget> Budgets{get;set;}
        public FinanceContext(DbContextOptions<FinanceContext> options, IConfiguration config) :base(options){
            _config = config;
        }
      
        protected override void OnModelCreating(ModelBuilder model){
            model.Entity<User>(catg =>{
                catg.ToTable("users");
                catg.HasKey(p => p.Id);
                catg.Property(p => p.Id).HasColumnName("id").IsRequired();
                catg.Property(p => p.Name).HasColumnName("name");
                catg.Property(p => p.LastName).HasColumnName("last_name");
                catg.Property(p => p.Email).HasColumnName("email");
                catg.Property(p => p.Password).HasColumnName("password");
                //catg.Property(p => p.Capital).HasColumnName("capital");
                catg.Property(p => p.Status).HasColumnName("status");
                catg.Property(p => p.PasswordSalt).HasColumnName("passwordSalt");
                
            });
        }
        
    }
}