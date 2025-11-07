import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  addDepartment(department: Department): Observable<Department> {
         console.log('Departman ekleme isteği gönderiliyor:', department);
         let option ={
          headers: new HttpHeaders({ 
            'Content-Type': 'application/json' })
         };

          return this.httpClient.post<Department>(this.url, department, option)
          .pipe(
            map((response: Department) => {
              console.log('Departman başarıyla eklendi:', response);
              return response;
            }),
            catchError((error: HttpErrorResponse) => {
              console.log('Departman eklenirken bir hata meydana geldi:', error.message);
              return throwError(() => new Error(error.statusText));
            })
          );

  }

                        


}
