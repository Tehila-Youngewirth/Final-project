using Microsoft.EntityFrameworkCore;
using RealEstateAPI.Data;

namespace RealEstateAPI;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddDbContext<RealEstateContext>(options =>
    options.UseSqlServer("Server=localhost,1433;Database=RealEstateDB;User Id=sa;Password=YourStrongPass123;TrustServerCertificate=True"));



        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // הוספת מדיניות CORS
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowReact",
                policy => policy.WithOrigins("http://localhost:5173") // הכתובת של הריאקט
                                .AllowAnyMethod()
                                .AllowAnyHeader());
        });

        var app = builder.Build();

        // שימוש ב-CORS
        app.UseCors("AllowReact");

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}

