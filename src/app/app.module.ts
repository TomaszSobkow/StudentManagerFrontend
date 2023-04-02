
import { DefaultModule } from './dashboard/layouts/default/default.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SignupComponent } from './authentication/signup/signup.component';
import { RegisterComponent } from './authentication/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterService } from './services/register.service';
import { NewRegisterComponent } from './authentication/new-register/new-register.component';


@NgModule({
  declarations: [	
    AppComponent,
    SignupComponent,
    RegisterComponent,
    NewRegisterComponent,
  
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DefaultModule

  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
