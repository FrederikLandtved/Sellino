using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Sellino.API.Helpers;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Repositories;
using Sellino.Service.Interfaces;
using Sellino.Service.Services;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddAutoMapper(typeof(Program).Assembly);

// Services for Product
builder.Services.AddDbContext<ProductDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProductVariantDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductVariantDbContext).Assembly.FullName)));
builder.Services.AddDbContext<ProductVariantOptionDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductVariantOptionDbContext).Assembly.FullName)));
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IProductVariantService, ProductVariantService>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductVariantRepository, ProductVariantRepository>();

// Services for ProductGroup
builder.Services.AddDbContext<ProductGroupDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProductGroupDbContext).Assembly.FullName)));
builder.Services.AddScoped<IProductGroupService, ProductGroupService>();
builder.Services.AddScoped<IProductGroupRepository, ProductGroupRepository>();

// Services for User
builder.Services.AddDbContext<UserDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(UserDbContext).Assembly.FullName)));
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<UserHelper, UserHelper>();

// Services for User
builder.Services.AddDbContext<ProfileDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProfileDbContext).Assembly.FullName)));
builder.Services.AddScoped<IProfileService, ProfileService>();
builder.Services.AddScoped<IProfileRepository, ProfileRepository>();

builder.Services.AddDbContext<ProfilePageDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProfilePageDbContext).Assembly.FullName)));
builder.Services.AddScoped<IProfilePageService, ProfilePageService>();
builder.Services.AddScoped<IProfilePageRepository, ProfilePageRepository>();
builder.Services.AddScoped<IProfilePageSectionService, ProfilePageSectionService>();
builder.Services.AddScoped<IProfilePageSectionRepository, ProfilePageSectionRepository>();

builder.Services.AddDbContext<UserProfileDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(UserProfileDbContext).Assembly.FullName)));
builder.Services.AddDbContext<MediaDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(MediaDbContext).Assembly.FullName)));
builder.Services.AddScoped<IMediaService, MediaService>();
builder.Services.AddScoped<IMediaRepository, MediaRepository>();
builder.Services.AddDbContext<ProfilePageSectionDbContext>(options => options.UseSqlServer(connectionString, assembly => assembly.MigrationsAssembly(typeof(ProfilePageSectionDbContext).Assembly.FullName)));

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
});
builder.Services.AddHttpContextAccessor();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "JWT", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement {
        {
            new OpenApiSecurityScheme
        {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
        },
            new string[]{}
        }
    });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});

builder.Services.AddCors(o => o.AddPolicy("StandardPolicy", builder =>
{
    builder.WithOrigins("https://lively-plant-06f32b803.4.azurestaticapps.net", "http://localhost:4200", "https://yellow-bay-0e3cc2303.4.azurestaticapps.net")
           .AllowAnyMethod()
           .AllowAnyHeader();
}));

var app = builder.Build();

app.UseCors("StandardPolicy");


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
