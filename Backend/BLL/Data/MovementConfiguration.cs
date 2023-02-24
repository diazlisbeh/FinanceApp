using Backend.DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.BLL.Data;

public class MovementConfiguration : IEntityTypeConfiguration<Movement>
{
    public void Configure(EntityTypeBuilder<Movement> builder)
    {
        builder.ToTable("movement");

        builder.Property(p => p.MovementID).HasColumnName("movementId");
        builder.HasKey(p => p.MovementID);

        builder.Property(p => p.Amount).HasColumnName("amount");
        builder.Property(p => p.Date).HasColumnName("date");
        builder.Property(p => p.CategoryID).HasColumnName("categoryID");
        builder.Property(p => p.UserID).HasColumnName("userId");
        builder.Property(p => p.Porpuse).HasColumnName("porpuse");

        builder.HasOne(p => p.Category)
        .WithMany(p => p.Movements)
        .HasForeignKey(p => p.CategoryID)
        .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasOne(p => p.User)
        .WithMany(p => p.Movements)
        .HasForeignKey(p => p.UserID)
        .OnDelete(DeleteBehavior.NoAction);

    }
}