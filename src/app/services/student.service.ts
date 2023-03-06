import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private url  = "http://192.168.178.100:8080/api/sm/students";


  constructor( private httpClient: HttpClient){ }

  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.url);
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(this.url, student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.url}/${id}`);

  }

  deleteStudent(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(`${this.url}/${id}`)
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`,student)
  }


}
