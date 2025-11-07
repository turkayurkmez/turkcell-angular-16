namespace projectManagement.API.Repositories;

public interface IRepository<T> where T : class
{
    System.Threading.Tasks.Task<IEnumerable<T>> GetAllAsync();
    System.Threading.Tasks.Task<T?> GetByIdAsync(int id);
    System.Threading.Tasks.Task<T> CreateAsync(T entity);
    System.Threading.Tasks.Task<T?> UpdateAsync(int id, T entity);
    System.Threading.Tasks.Task<bool> DeleteAsync(int id);
}
