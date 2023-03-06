
import { DefaultComponent } from './dashboard/layouts/default/default.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ListofstudentsComponent } from './listofstudents/listofstudents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path:'', redirectTo:(`${'signup'}`), pathMatch:'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'defaultComponent', component: DefaultComponent,
     children :[
       { path:'', component: DashboardComponent  },
       { path: 'students', component: ListofstudentsComponent},
       { path: 'students/updatestudent/:id', component: UpdatestudentComponent },
       { path: 'addstudent', component: AddstudentComponent }
      ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }


