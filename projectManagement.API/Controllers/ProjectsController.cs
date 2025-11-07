using Microsoft.AspNetCore.Mvc;
using projectManagement.API.Models;
using projectManagement.API.Repositories;

namespace projectManagement.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IRepository<Project> _repository;

    public ProjectsController(IRepository<Project> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async System.Threading.Tasks.Task<ActionResult<IEnumerable<Project>>> GetAll()
    {
        var projects = await _repository.GetAllAsync();
        return Ok(projects);
    }

    [HttpGet("{id}")]
    public async System.Threading.Tasks.Task<ActionResult<Project>> GetById(int id)
    {
        var project = await _repository.GetByIdAsync(id);
        if (project == null)
        {
            return NotFound(new { message = $"Project with id {id} not found" });
        }

        return Ok(project);
    }

    [HttpPost]
    public async System.Threading.Tasks.Task<ActionResult<Project>> Create([FromBody] Project project)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var createdProject = await _repository.CreateAsync(project);
        return CreatedAtAction(nameof(GetById), new { id = createdProject.Id }, createdProject);
    }

    [HttpPut("{id}")]
    public async System.Threading.Tasks.Task<ActionResult<Project>> Update(int id, [FromBody] Project project)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var updatedProject = await _repository.UpdateAsync(id, project);
        if (updatedProject == null)
        {
            return NotFound(new { message = $"Project with id {id} not found" });
        }

        return Ok(updatedProject);
    }

    [HttpDelete("{id}")]
    public async System.Threading.Tasks.Task<ActionResult> Delete(int id)
    {
        var deleted = await _repository.DeleteAsync(id);
        if (!deleted)
        {
            return NotFound(new { message = $"Project with id {id} not found" });
        }

        return NoContent();
    }
}
