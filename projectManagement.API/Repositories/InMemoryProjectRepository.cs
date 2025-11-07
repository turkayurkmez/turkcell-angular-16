using projectManagement.API.Models;
using TaskModel = projectManagement.API.Models.Task;

namespace projectManagement.API.Repositories;

public class InMemoryProjectRepository : IRepository<Project>
{
    private readonly List<Project> _projects;
    private int _nextId = 3;

    public InMemoryProjectRepository()
    {
        _projects = new List<Project>
        {
            new Project
            {
                Id = 1,
                Name = "E-Commerce Platform",
                Description = "Building a modern e-commerce platform",
                StartDate = new DateTime(2024, 1, 15),
                CompletedPercent = 45,
                DepartmentId = 1,
                Tasks = new List<TaskModel>
                {
                    new TaskModel { Id = 1, Name = "Database Design", Description = "Design database schema", ExpectedDate = new DateTime(2024, 2, 1), ProjectId = 1, IsDone = true },
                    new TaskModel { Id = 2, Name = "API Development", Description = "Develop REST APIs", ExpectedDate = new DateTime(2024, 3, 15), ProjectId = 1, IsDone = false }
                }
            },
            new Project
            {
                Id = 2,
                Name = "Mobile App",
                Description = "Customer mobile application",
                StartDate = new DateTime(2024, 2, 1),
                CompletedPercent = 20,
                DepartmentId = 1,
                Tasks = new List<TaskModel>
                {
                    new TaskModel { Id = 3, Name = "UI Design", Description = "Design mobile UI", ExpectedDate = new DateTime(2024, 3, 1), ProjectId = 2, IsDone = false }
                }
            }
        };
    }

    public System.Threading.Tasks.Task<IEnumerable<Project>> GetAllAsync()
    {
        return System.Threading.Tasks.Task.FromResult<IEnumerable<Project>>(_projects);
    }

    public System.Threading.Tasks.Task<Project?> GetByIdAsync(int id)
    {
        var project = _projects.FirstOrDefault(p => p.Id == id);
        return System.Threading.Tasks.Task.FromResult(project);
    }

    public System.Threading.Tasks.Task<Project> CreateAsync(Project entity)
    {
        entity.Id = _nextId++;
        entity.Tasks ??= new List<TaskModel>();
        _projects.Add(entity);
        return System.Threading.Tasks.Task.FromResult(entity);
    }

    public System.Threading.Tasks.Task<Project?> UpdateAsync(int id, Project entity)
    {
        var existingProject = _projects.FirstOrDefault(p => p.Id == id);
        if (existingProject == null)
        {
            return System.Threading.Tasks.Task.FromResult<Project?>(null);
        }

        existingProject.Name = entity.Name;
        existingProject.Description = entity.Description;
        existingProject.StartDate = entity.StartDate;
        existingProject.CompletedPercent = entity.CompletedPercent;
        existingProject.DepartmentId = entity.DepartmentId;
        
        if (entity.Tasks != null)
        {
            existingProject.Tasks = entity.Tasks;
        }

        return System.Threading.Tasks.Task.FromResult<Project?>(existingProject);
    }

    public System.Threading.Tasks.Task<bool> DeleteAsync(int id)
    {
        var project = _projects.FirstOrDefault(p => p.Id == id);
        if (project == null)
        {
            return System.Threading.Tasks.Task.FromResult(false);
        }

        _projects.Remove(project);
        return System.Threading.Tasks.Task.FromResult(true);
    }
}
