using Microsoft.EntityFrameworkCore;
using RealEstateAPI.Models;

namespace RealEstateAPI.Data
{
    public class RealEstateContext : DbContext
    {
        public RealEstateContext(DbContextOptions<RealEstateContext> options)
            : base(options)
        {
        }
        //הוספה של הפוקנציה הבאה כדי שהמחיר יעבוד טוב
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // הגדרת סוג הנתונים עבור המחיר כדי למנוע את האזהרה ב-Console
            modelBuilder.Entity<Property>()
                .Property(p => p.Price)
                .HasColumnType("decimal(18,2)");
        }
        //הוספת פונקציה כדי לפתטור את בעיה ה sa של החיובר ל SQL
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // זה קוד שעוקף את כל הקבצים החיצוניים ומתחבר ישירות לשרת שלך
           //משאירים ריק לאחר היצירה כדי שכל אחד יוכל הלתחבר לבסיס הנתונים מכל שרת
           //optionsBuilder.UseSqlServer("Server=DESKTOP-LAU8V1U;Database=RealEstateDB;Trusted_Connection=True;TrustServerCertificate=True;");
        }
        public DbSet<User> Users { get; set; }

        public DbSet<Property> Properties { get; set; }

        public DbSet<Inquiry> Inquiries { get; set; }
    }
}
