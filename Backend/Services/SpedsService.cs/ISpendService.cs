using Backend.Models;

namespace Backend.Services;

    public interface ISpendService
    {
        public Task CreateSpend(Spend spend);
        public List<Spend> GetUserSpends(int UserId);

            
    }
