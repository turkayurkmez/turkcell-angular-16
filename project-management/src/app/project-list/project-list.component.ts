import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = projects;
  allProjects: Project[] =projects;

  searchKey?: string;
  constructor(private activeRoute: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data =>{
      console.log(data['id']);
      this.projects = data['id'] != undefined 
                      ? this.allProjects.filter(p=>p.departmentId == data["id"])
                      : this.allProjects;  

      console.log(this.projects);
 
      
    });
  }

}
