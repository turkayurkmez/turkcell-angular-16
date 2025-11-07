namespace projectManagement.API.Models;

public class Project
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public DateTime? StartDate { get; set; }
    public int CompletedPercent { get; set; }
    public int? DepartmentId { get; set; }
    public List<Task>? Tasks { get; set; }
}
