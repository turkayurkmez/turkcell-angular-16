import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  allProjects: Project[] = [];

  searchKey?: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private projectService: ProjectsService
  ) {
    this.projectService
      .getProjects()
      .subscribe((data) => (this.projects = data));
  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      console.log(' Projeler çekildi', data);
      this.allProjects = data;
    });

    console.log('allProjects:', this.allProjects);

    this.activeRoute.params.subscribe((data) => {
      console.log(data['id']);

      this.projects =
        data['id'] != undefined
          ? this.allProjects.filter((p) => p.departmentId == data['id'])
          : this.allProjects;
    });

    console.log(this.projects);
  }
}
