import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

   
  addProjectForm?: FormGroup;

    ngOnInit(): void {
    //addProjectForm nesnesini initialize edeceğiz.
  }


}
