import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentsService } from '../services/departments.service';
import { Department } from '../models/department.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentsService,
    private projectsService: ProjectsService
  ) {}

  addProjectForm!: FormGroup;

  departments!: Department[];

  ngOnInit(): void {
    //addProjectForm nesnesini initialize edeceğiz.
    this.addProjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      departmentId: ['', Validators.required],
    });

    this.departmentService
      .getDepartments()
      .subscribe((data) => (this.departments = data));
  }

  checkName(): boolean | undefined {
    return (
      this.addProjectForm?.get('name')?.hasError('required') &&
      this.addProjectForm?.get('name')?.dirty
    );
  }

  checkNameLength(): boolean | undefined {
    console.log('checkNameLength called');

    console.log(this.addProjectForm?.get('name')?.errors);

    return (
      this.addProjectForm?.get('name')?.hasError('minLength') &&
      this.addProjectForm?.get('name')?.dirty
    );
  }

  checkDescription(): boolean | undefined {
    return (
      this.addProjectForm?.get('description')?.hasError('required') &&
      this.addProjectForm?.get('description')?.dirty
    );
  }

  checkDepartmentId(): boolean | undefined {
    return (
      this.addProjectForm?.get('departmentId')?.hasError('required') &&
      this.addProjectForm?.get('departmentId')?.touched
    );
  }

  addProject() {
    if (this.addProjectForm.valid) {
      console.log(this.addProjectForm.value);

      this.projectsService.createProject(this.addProjectForm.value).subscribe({
        next: (data) => {
          console.log('Proje başarıyla oluşturuldu:', data);
          this.addProjectForm.reset();
        },
        error: (error) => {
          console.log('Proje oluşturulurken bir hata meydana geldi:', error);
        },
      }); 


    }
  }
}
