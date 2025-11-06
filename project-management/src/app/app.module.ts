import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectTasksListComponent } from './project-tasks-list/project-tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentMenuComponent,
    HeaderMenuComponent,
    ProjectListComponent,
    ProjectInfoComponent,
    ProjectTasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
