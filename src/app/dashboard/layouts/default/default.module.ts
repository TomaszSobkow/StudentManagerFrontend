import { ListofstudentsComponent } from './../../../listofstudents/listofstudents.component';
import { AddstudentComponent } from './../../../addstudent/addstudent.component';
import { NavbarComponent } from './../../../navbar/navbar.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { UpdatestudentComponent } from 'src/app/updatestudent/updatestudent.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    NavbarComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    ListofstudentsComponent,
    

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule


  ]
})
export class DefaultModule { }
