using Backend.DAL.Interface;
using Backend.DAL.Models;
using Backend.BLL.Context;
using System.Collections;
using Backend.DAL.DTOs;
using AutoMapper;

namespace Backend.BLL.Services;

public class TransactionService : ITransactionService
{
    private FinanceContext _context;
    private IMapper _mapper;
    public TransactionService (FinanceContext context, IMapper mapper){
        _context = context;
        _mapper = mapper;
    }
    public List<Transaction> GetAll(int Id)
    {
        return  _context.Transactions.Where(p => p.UserID == Id).ToList();
    }

    public Transaction GetTransaction(Guid id)
    {
        return _context.Transactions.FirstOrDefault(p => p.TransactionID == id);
    }

    public async Task<TransactionDto> Create(TransactionDto transactionDto){
        var transaction = new Transaction(){
            TransactionID = Guid.NewGuid(),
            Amount = transactionDto.Amount,
            CategoryID = transactionDto.CategoryId,
            UserID = transactionDto.UserID,
            Date = DateTime.Parse(transactionDto.Date),
            Porpuse = transactionDto.Porpuse,
            Type = transactionDto.Type
        };
        await _context.Transactions.AddAsync(transaction);
        await _context.SaveChangesAsync();
        return transactionDto;

    }
}