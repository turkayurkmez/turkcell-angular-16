using projectManagement.API.Models;
using projectManagement.API.Repositories;
using TaskModel = projectManagement.API.Models.Task;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure CORS - Tüm originlere izin ver
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Dependency Injection - Repository'leri Singleton olarak kaydet
builder.Services.AddSingleton<IRepository<Department>, InMemoryDepartmentRepository>();
builder.Services.AddSingleton<IRepository<Project>, InMemoryProjectRepository>();
builder.Services.AddSingleton<IRepository<TaskModel>, InMemoryTaskRepository>();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// CORS middleware'ini kullan
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
