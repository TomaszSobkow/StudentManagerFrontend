
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Student } from '../student';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    title = 'DashBoard Component'

    noOfUsers : number = 0; 
    students: Student[] = [] ;
    
  constructor( private registerService: RegisterService, private studentService: StudentService ) { }

  ngOnInit(): void {
    this.noOfUsers = this.registerService.getUsers().length;

    this.studentService.getStudentsList().subscribe( data => {
      this.students = data;
    });
  }

}
