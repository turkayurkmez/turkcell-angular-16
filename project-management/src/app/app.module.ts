import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectTasksListComponent } from './project-tasks-list/project-tasks-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KebabPipe } from './pipes/kebab.pipe';
import { LengthPipe } from './pipes/length.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PostDataComponent } from './post-data/post-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentMenuComponent,
    HeaderMenuComponent,
    ProjectListComponent,
    ProjectInfoComponent,
    ProjectTasksListComponent,
    KebabPipe,
    LengthPipe,
    SearchPipe,
    PostDataComponent,
    AddDepartmentComponent,
    AddProjectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
