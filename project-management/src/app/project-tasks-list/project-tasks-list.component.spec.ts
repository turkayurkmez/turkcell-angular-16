import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTasksListComponent } from './project-tasks-list.component';

describe('ProjectTasksListComponent', () => {
  let component: ProjectTasksListComponent;
  let fixture: ComponentFixture<ProjectTasksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTasksListComponent]
    });
    fixture = TestBed.createComponent(ProjectTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
