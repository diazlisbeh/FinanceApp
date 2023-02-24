using System.Collections.ObjectModel;
using Backend.DAL.Models;
namespace Backend.DAL.Interface;

public interface IInconmeService{
    public Task<int> Add(string email, float amount);

    List<Income> GetAll();

    Income Get(Guid id);
    List<Category> GetCategories();
}