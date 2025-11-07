using TaskModel = projectManagement.API.Models.Task;

namespace projectManagement.API.Repositories;

public class InMemoryTaskRepository : IRepository<TaskModel>
{
    private readonly List<TaskModel> _tasks;
    private int _nextId = 4;

    public InMemoryTaskRepository()
    {
        _tasks = new List<TaskModel>
        {
            new TaskModel { Id = 1, Name = "Database Design", Description = "Design database schema", ExpectedDate = new DateTime(2024, 2, 1), ProjectId = 1, IsDone = true },
            new TaskModel { Id = 2, Name = "API Development", Description = "Develop REST APIs", ExpectedDate = new DateTime(2024, 3, 15), ProjectId = 1, IsDone = false },
            new TaskModel { Id = 3, Name = "UI Design", Description = "Design mobile UI", ExpectedDate = new DateTime(2024, 3, 1), ProjectId = 2, IsDone = false }
        };
    }

    public System.Threading.Tasks.Task<IEnumerable<TaskModel>> GetAllAsync()
    {
        return System.Threading.Tasks.Task.FromResult<IEnumerable<TaskModel>>(_tasks);
    }

    public System.Threading.Tasks.Task<TaskModel?> GetByIdAsync(int id)
    {
        var task = _tasks.FirstOrDefault(t => t.Id == id);
        return System.Threading.Tasks.Task.FromResult(task);
    }

    public System.Threading.Tasks.Task<TaskModel> CreateAsync(TaskModel entity)
    {
        entity.Id = _nextId++;
        _tasks.Add(entity);
        return System.Threading.Tasks.Task.FromResult(entity);
    }

    public System.Threading.Tasks.Task<TaskModel?> UpdateAsync(int id, TaskModel entity)
    {
        var existingTask = _tasks.FirstOrDefault(t => t.Id == id);
        if (existingTask == null)
        {
            return System.Threading.Tasks.Task.FromResult<TaskModel?>(null);
        }

        existingTask.Name = entity.Name;
        existingTask.Description = entity.Description;
        existingTask.ExpectedDate = entity.ExpectedDate;
        existingTask.ProjectId = entity.ProjectId;
        existingTask.IsDone = entity.IsDone;

        return System.Threading.Tasks.Task.FromResult<TaskModel?>(existingTask);
    }

    public System.Threading.Tasks.Task<bool> DeleteAsync(int id)
    {
        var task = _tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
        {
            return System.Threading.Tasks.Task.FromResult(false);
        }

        _tasks.Remove(task);
        return System.Threading.Tasks.Task.FromResult(true);
    }

    public System.Threading.Tasks.Task<IEnumerable<TaskModel>> GetTasksByProjectIdAsync(int projectId)
    {
        var projectTasks = _tasks.Where(t => t.ProjectId == projectId);
        return System.Threading.Tasks.Task.FromResult<IEnumerable<TaskModel>>(projectTasks);
    }
}
