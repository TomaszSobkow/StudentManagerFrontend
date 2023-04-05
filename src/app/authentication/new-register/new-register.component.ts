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

  
  passwordConfirmation = '';
  private  isPassword = false;
 
  user: UserSQL = new UserSQL();
  private allUsers: UserSQL[] = [];


  constructor(private userService: UsersService, private router: Router) { }

  register(){
    console.log('User ' + this.user.login)
    console.log('User ' + this.user.password)
    console.log('User ' + this.user.id)
    
    
    this.dataValidation();
    console.log('Pasword validation is '+ this.isPassword)
    if(this.isPassword){
      this.checkUser();
    }else{
      window.alert("CLICKED")
    }
    
  
  }

  checkUser(){  
    for(var i = 0; i < this.allUsers.length; i++){
      console.log('Inside checkUser METHOD ' + this.allUsers[i].login);
      if(this.allUsers[i].login !== this.user.login){
         this.createNewUser(this.user);
        console.log('New USER- ' + this.user.login + '-' + this.user.password)
      }else{
        window.alert("The user " + this.user.login + "Alredy exists")
      }
    }
  }


  dataValidation() {
    if (this.user.login === '') {
      window.alert('Login can not be Empty !');
    }

    if (this.user.password === '') {
      window.alert('Password can not be empty!');
    }

    if (this.user.password != this.passwordConfirmation) {
      window.alert('Passwords are not the same ');
    }else{
      console.log('Password is true');
      this.isPassword = true;
    }
  }

  createNewUser(newUser: UserSQL ){
    console.log('In Method createNewUser')
    this.userService.createUser(newUser).subscribe( data =>{
      window.alert("User " + this.user.login+ "Created"),
      this.router.navigate([''])
    },
    error => window.alert(error));
  }

  getAllUsers(){
    this.userService.getUsersList().subscribe(user => {
      this.allUsers = user;
    })
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
