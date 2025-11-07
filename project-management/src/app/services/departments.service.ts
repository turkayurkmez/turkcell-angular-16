import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:5141/api/departments';

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
                          .pipe(
                            
                            catchError((error: HttpErrorResponse)=>{
                            console.log('Departmanları çekerken bir hata meydana geldi:', error.message);
                            return throwError(()=>new Error(error.statusText));
                          }));
  }

                        


}
