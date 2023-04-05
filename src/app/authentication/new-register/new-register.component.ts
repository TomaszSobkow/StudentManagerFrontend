import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserSQL } from 'src/app/users/userSQL';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {

  private isLogin = false;
  private isPassword= false;
  passwordConfirmation = '';
  private isPasswordConfirmation = false;
 
  user: UserSQL = new UserSQL();
  private allUsers: UserSQL[] = [];

  constructor(private userService: UsersService, private router: Router) { }

  register(){
    this.dataValidation();
    if(this.isLogin && this.isPassword && this.isPasswordConfirmation){
      this.checkUser();
    }else{
      window.alert("CLICKED")
    }
  }

  dataValidation() {
    if (this.user.login != ''){
      if (this.user.password != ''){
        if (this.user.password === this.passwordConfirmation) {
            this.isLogin = true;
            this.isPassword = true;
            this.isPasswordConfirmation = true;
        }else{
          window.alert('Passwords are not the same ');
        }
      }else{
        window.alert('Password can not be empty!');
      }
    }else{
      window.alert('Login can not be Empty !');}
    }

  checkUser(){  
    let ifUserExists = true
      for(var i = 0; i < this.allUsers.length; i++){
          if(this.allUsers[i].login === this.user.login){
              window.alert("The user " + this.user.login + " alredy exists")
              ifUserExists = false;
              break;
            }
      }

      if(ifUserExists){
          console.log('ifUserExists = '+ ifUserExists)
          this.createNewUser();
      }
}
     
  createNewUser( ){
    console.log('In Method createNewUser')
    this.userService.createUser(this.user).subscribe( data =>{
      window.alert("User " + this.user.login+ "Created"),
      this.router.navigate([''])
    },
    error => window.alert(error));
  }

  getAllUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.allUsers = data;
    })
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
