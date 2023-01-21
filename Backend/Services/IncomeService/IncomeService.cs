using System.Collections.ObjectModel;
using Backend.Models;

namespace Backend.Services;


public class IncomeService : IInconmeService
{
    FinanceContext _context;
    public IncomeService(FinanceContext context){
        _context = context;
    }
    public async Task<int> Add(string email, float amount)
    {
       var user = _context.users.FirstOrDefault(p => p.Email == email);
        if(user is null){ return 0;}
        Income inc = new Income(){UserID=user.Id,IncomeID=Guid.NewGuid(),Amount=amount,DateIncome=DateTime.Now,User=user};
       await _context.Incomes.AddAsync(inc);
       await _context.SaveChangesAsync();
        return  0;
    }

    public List<Income> GetAll(){
        return _context.Incomes.ToList();
    }
    public Income Get(Guid id){
        return _context.Incomes.First(p => p.IncomeID == id);
    }
}