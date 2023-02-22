using Backend.Models;

namespace Backend.Services;

public class SpendService : ISpendService
{
    private FinanceContext _context;

    public SpendService(FinanceContext context){
        _context = context;
    }
    public async Task CreateSpend(Spend spend)
    {
        await _context.Spends.AddAsync(spend);
        await _context.SaveChangesAsync();
    }

    public List<Spend> GetUserSpends(int UserId)
    {
        return _context.Spends.Where(p => p.UserID == UserId).ToList();      
    }
}
