using projectManagement.API.Models;

namespace projectManagement.API.Repositories;

public class InMemoryDepartmentRepository : IRepository<Department>
{
    private readonly List<Department> _departments;
    private int _nextId = 4;

    public InMemoryDepartmentRepository()
    {
        _departments = new List<Department>
        {
            new Department { Id = 1, Name = "IT Department" },
            new Department { Id = 2, Name = "Marketing Department" },
            new Department { Id = 3, Name = "HR Department" }
        };
    }

    public System.Threading.Tasks.Task<IEnumerable<Department>> GetAllAsync()
    {
        return System.Threading.Tasks.Task.FromResult<IEnumerable<Department>>(_departments);
    }

    public System.Threading.Tasks.Task<Department?> GetByIdAsync(int id)
    {
        var department = _departments.FirstOrDefault(d => d.Id == id);
        return System.Threading.Tasks.Task.FromResult(department);
    }

    public System.Threading.Tasks.Task<Department> CreateAsync(Department entity)
    {
        entity.Id = _nextId++;
        _departments.Add(entity);
        return System.Threading.Tasks.Task.FromResult(entity);
    }

    public System.Threading.Tasks.Task<Department?> UpdateAsync(int id, Department entity)
    {
        var existingDepartment = _departments.FirstOrDefault(d => d.Id == id);
        if (existingDepartment == null)
        {
            return System.Threading.Tasks.Task.FromResult<Department?>(null);
        }

        existingDepartment.Name = entity.Name;
        return System.Threading.Tasks.Task.FromResult<Department?>(existingDepartment);
    }

    public System.Threading.Tasks.Task<bool> DeleteAsync(int id)
    {
        var department = _departments.FirstOrDefault(d => d.Id == id);
        if (department == null)
        {
            return System.Threading.Tasks.Task.FromResult(false);
        }

        _departments.Remove(department);
        return System.Threading.Tasks.Task.FromResult(true);
    }
}
