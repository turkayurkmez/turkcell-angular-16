import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:5141/api/projects';

  //geriye Observable<Project[]> dönen ve hatayı yakalayan bir method yaz:
  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url)
                          .pipe(
                            catchError((error: HttpErrorResponse)=>{
                            console.log('Projeleri çekerken bir hata meydana geldi:', error.message);
                            return throwError(()=>new Error(error.statusText));
                          }));
  }
  
  //createProject methodu yaz:
  createProject(project: Project): Observable<Project> {

     let option ={
          headers: new HttpHeaders({ 
            'Content-Type': 'application/json' })
         };

    return this.httpClient.post<Project>(this.url, project,option)
                          .pipe(
                            catchError((error: HttpErrorResponse)=>{
                              console.log('Proje oluşturulurken bir hata meydana geldi:', error.message);
                              return throwError(()=>new Error(error.statusText));
                            }));
  }
  
}

