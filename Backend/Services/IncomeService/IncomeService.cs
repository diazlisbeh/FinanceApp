using Backend.Models;

namespace Backend.Services;


public class IncomeService : IInconmeService
{
    FinanceContext _context;
    public IncomeService(FinanceContext context){
        _context = context;
    }
    public int Add(string email, float amount)
    {
        var user = _context.users.FirstOrDefault(p => p.Email == email);
        // if(user is null){ return 0;}
        // Income in = 
       _context.Incomes.Add (new Income(){UserID=user.Id,IncomeID=Guid.NewGuid(),Amount=amount,DateIncome=DateTime.Now,User=user});
        return 1;
    }
}