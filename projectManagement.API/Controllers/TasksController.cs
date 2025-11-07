using Microsoft.AspNetCore.Mvc;
using projectManagement.API.Repositories;
using TaskModel = projectManagement.API.Models.Task;

namespace projectManagement.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly IRepository<TaskModel> _repository;

    public TasksController(IRepository<TaskModel> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async System.Threading.Tasks.Task<ActionResult<IEnumerable<TaskModel>>> GetAll()
    {
        var tasks = await _repository.GetAllAsync();
        return Ok(tasks);
    }

    [HttpGet("{id}")]
    public async System.Threading.Tasks.Task<ActionResult<TaskModel>> GetById(int id)
    {
        var task = await _repository.GetByIdAsync(id);
        if (task == null)
        {
            return NotFound(new { message = $"Task with id {id} not found" });
        }

        return Ok(task);
    }

    [HttpPost]
    public async System.Threading.Tasks.Task<ActionResult<TaskModel>> Create([FromBody] TaskModel task)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var createdTask = await _repository.CreateAsync(task);
        return CreatedAtAction(nameof(GetById), new { id = createdTask.Id }, createdTask);
    }

    [HttpPut("{id}")]
    public async System.Threading.Tasks.Task<ActionResult<TaskModel>> Update(int id, [FromBody] TaskModel task)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var updatedTask = await _repository.UpdateAsync(id, task);
        if (updatedTask == null)
        {
            return NotFound(new { message = $"Task with id {id} not found" });
        }

        return Ok(updatedTask);
    }

    [HttpDelete("{id}")]
    public async System.Threading.Tasks.Task<ActionResult> Delete(int id)
    {
        var deleted = await _repository.DeleteAsync(id);
        if (!deleted)
        {
            return NotFound(new { message = $"Task with id {id} not found" });
        }

        return NoContent();
    }
}
