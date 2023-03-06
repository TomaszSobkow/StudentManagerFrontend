import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  providedUser = '';
  providedPassword =  '';

  registeredUsers = Array<User>();

  isLoginCorrect : boolean = false;

  constructor( private router: Router, private registerService: RegisterService) { }
 
  onSubmit(){
    
    for(let i = 0; i < this.registeredUsers.length; i++){
      if(this.registeredUsers[i].name === (this.providedUser) &&
        (this.registeredUsers[i].password === (this.providedPassword))){
        window.alert('Welcome ' + this.providedUser)
        this.isLoginCorrect = true;
        this.router.navigate(['/defaultComponent'])
        break;
      }
    }
    this.userNotKnown(this.providedUser)
  }

  userNotKnown(user: string){
    if(this.isLoginCorrect === false){
      window.alert('Not known user '+ user + 'or wrong password !!');
    }

  }

  ngOnInit(): void {
    this.registeredUsers = this.registerService.getUsers();
  }

}
