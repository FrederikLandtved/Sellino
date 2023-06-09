using Sellino.Domain.Context;
using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Repositories;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ProductDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProductGroupDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductGroupDbContext).Assembly.FullName)));
builder.Services.AddDbContext<UserDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(UserDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProfileDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProfileDbContext).Assembly.FullName)));
builder.Services.AddDbContext<UserProfileDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(UserProfileDbContext).Assembly.FullName)));

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

app.MapGet("/", () => "Hello World!");

app.Run();
