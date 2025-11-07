import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { NgForm } from '@angular/forms';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  constructor(private departmentService: DepartmentsService) {

  }
  

  department: Department = new Department();

  submitDepartment(form: NgForm):void {

    if (form.valid) {
      this.department = form.value;
      console.log(this.department)
      this.departmentService.addDepartment(this.department).subscribe({
        next: (data: Department) => {
          console.log('Departman eklendi:', data);
          form.resetForm();
        },
        error: (error: Error) => {
          console.error('Departman eklenirken hata oluştu:', error.message);
        }
      });
    }
    else{
      console.log("Form is invalid");
    }
  }


}
