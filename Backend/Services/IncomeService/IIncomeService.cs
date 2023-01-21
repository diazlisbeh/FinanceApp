using System.Collections.ObjectModel;
using Backend.Models;
namespace Backend.Services;

public interface IInconmeService{
    public Task<int> Add(string email, float amount);

    List<Income> GetAll();

    Income Get(Guid id);
}