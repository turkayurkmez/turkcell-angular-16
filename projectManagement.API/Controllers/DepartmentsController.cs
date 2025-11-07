using Microsoft.AspNetCore.Mvc;
using projectManagement.API.Models;
using projectManagement.API.Repositories;

namespace projectManagement.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DepartmentsController : ControllerBase
{
    private readonly IRepository<Department> _repository;

    public DepartmentsController(IRepository<Department> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async System.Threading.Tasks.Task<ActionResult<IEnumerable<Department>>> GetAll()
    {
        var departments = await _repository.GetAllAsync();
        return Ok(departments);
    }

    [HttpGet("{id}")]
    public async System.Threading.Tasks.Task<ActionResult<Department>> GetById(int id)
    {
        var department = await _repository.GetByIdAsync(id);
        if (department == null)
        {
            return NotFound(new { message = $"Department with id {id} not found" });
        }

        return Ok(department);
    }

    [HttpPost]
    public async System.Threading.Tasks.Task<ActionResult<Department>> Create([FromBody] Department department)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var createdDepartment = await _repository.CreateAsync(department);
        return CreatedAtAction(nameof(GetById), new { id = createdDepartment.Id }, createdDepartment);
    }

    [HttpPut("{id}")]
    public async System.Threading.Tasks.Task<ActionResult<Department>> Update(int id, [FromBody] Department department)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var updatedDepartment = await _repository.UpdateAsync(id, department);
        if (updatedDepartment == null)
        {
            return NotFound(new { message = $"Department with id {id} not found" });
        }

        return Ok(updatedDepartment);
    }

    [HttpDelete("{id}")]
    public async System.Threading.Tasks.Task<ActionResult> Delete(int id)
    {
        var deleted = await _repository.DeleteAsync(id);
        if (!deleted)
        {
            return NotFound(new { message = $"Department with id {id} not found" });
        }

        return NoContent();
    }
}
