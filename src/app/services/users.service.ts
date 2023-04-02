import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSQL } from '../users/userSQL';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url  = "http://192.168.178.63:8080/api/students";


  constructor( private httpClient: HttpClient){ }

  getStudentsList(): Observable<UserSQL[]>{
    return this.httpClient.get<UserSQL[]>(this.url);
  }

  createStudent(user: UserSQL): Observable<Object>{
    return this.httpClient.post(this.url, user);
  }

  getStudentById(id: number): Observable<UserSQL>{
    return this.httpClient.get<UserSQL>(`${this.url}/${id}`);

  }

  deleteStudent(id: number): Observable<UserSQL>{
    return this.httpClient.delete<UserSQL>(`${this.url}/${id}`)
  }

  updateStudent(id: number, user: UserSQL): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`,user)
  }
}
