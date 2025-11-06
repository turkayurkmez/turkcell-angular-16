import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectTasksListComponent } from './project-tasks-list/project-tasks-list.component';
import { FormsModule } from '@angular/forms';
import { KebabPipe } from './pipes/kebab.pipe';
import { LengthPipe } from './pipes/length.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PostDataComponent } from './post-data/post-data.component';
import { HttpClientModule } from '@angular/common/http';

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
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
