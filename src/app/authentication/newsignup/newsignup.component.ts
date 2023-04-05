import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserSQL } from 'src/app/users/userSQL';

@Component({
  selector: 'app-newsignup',
  templateUrl: './newsignup.component.html',
  styleUrls: ['./newsignup.component.css']
})
export class NewsignupComponent implements OnInit {

  private login = '';
  private password = '';
  private passwordConfirmation = '';

  private isNameCorrect: boolean = false;
  private isPasswordCorret: boolean = false;

  private user: UserSQL = new UserSQL();


  private allUsers: UserSQL[] = [];

  constructor( private userService: UsersService) { }

  validateName() {
    if (this.user.  login === '') {
      window.alert('The Login can not be Empty !');
    } else {
      this.isNameCorrect = true;
    }
  }

  validatePassword() {
    if (this.password != this.passwordConfirmation) {
      window.alert('Passwords are not the same ');
    }
    if (this.password === '') {
      window.alert('The password can not be empty!');
    }
    if (this.password === this.passwordConfirmation) {
      this.isPasswordCorret = true;
    }
  }

  getUsers(){
    this.userService.getUsersList().subscribe( users=> {
    this.allUsers = users;
})
  }

  // createUser(newUser: UserSQL): Observable<Object>{
  //   return newUser;
  // }


  ngOnInit(): void {
    this.getUsers();
  }

}
