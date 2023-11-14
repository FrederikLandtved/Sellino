using Sellino.Domain.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ProductDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProductVariantDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductVariantDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProductVariantOptionDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductVariantOptionDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProductGroupDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductGroupDbContext).Assembly.FullName)));
builder.Services.AddDbContext<UserDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(UserDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProfileDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProfileDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProfilePageDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProfilePageDbContext).Assembly.FullName)));
builder.Services.AddDbContext<UserProfileDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(UserProfileDbContext).Assembly.FullName)));
builder.Services.AddDbContext<MediaDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(MediaDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProfilePageSectionDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProfilePageSectionDbContext).Assembly.FullName)));
    
builder.Services.AddScoped<IHttpContextAccessor, HttpContextAccessor>();

app.MapGet("/", () => "Hello World!");

app.Run();
