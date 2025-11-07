import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/departments.mock';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css'],
})
export class DepartmentMenuComponent {
  constructor(private departmentService: DepartmentsService) {}
  departments: Department[] = [];

  ngOnInit() {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (err) => {
        console.error('Departmanları çekerken bir hata meydana geldi:', err);
      },
    });
  }
}
