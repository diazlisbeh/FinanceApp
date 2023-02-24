using Backend.DAL.Models;

namespace Backend.DAL.Interface;

    public interface ISpendService
    {
        public Task CreateSpend(Spend spend);
        public List<Spend> GetUserSpends(int UserId);

            
    }
