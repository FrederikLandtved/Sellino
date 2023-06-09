using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Repositories;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ProductDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProductGroupDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductGroupDbContext).Assembly.FullName)));

app.MapGet("/", () => "Hello World!");

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

app.Run();
