using System;
using System.Collections;
using Backend.BLL.Context;
using Backend.DAL.Interface;
using Backend.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.BLL.Services;


public class BudgetService : IBudgetService
{
    private FinanceContext _context;

    public BudgetService(FinanceContext context)
    {
        _context = context;
    }
    public async Task<Budget> Get(int userId)
    {
        var budget = await _context.Budgets.SingleOrDefaultAsync(u => u.UserID == userId);
        return budget;
    }

    public Task<IEnumerable> GetAll(int id)
    {
        throw new NotImplementedException();
    }
}