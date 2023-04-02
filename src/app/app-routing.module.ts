
import { DefaultComponent } from './dashboard/layouts/default/default.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { UpdatestudentComponent } from './students/updatestudent/updatestudent.component';
import { ListofstudentsComponent } from './students/listofstudents/listofstudents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListofusersComponent } from './users/listofusers/listofusers.component';

const routes: Routes = [

  { path:'', redirectTo:(`${'signup'}`), pathMatch:'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'defaultComponent', component: DefaultComponent,
     children :[
       { path:'', component: DashboardComponent  },
       { path: 'students', component: ListofstudentsComponent},
       { path: 'students/student/:id', component: UpdatestudentComponent },
       { path: 'addstudent', component: AddstudentComponent },
       { path: 'users', component: ListofusersComponent} 
      ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }


