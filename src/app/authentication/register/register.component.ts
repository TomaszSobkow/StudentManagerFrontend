import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  password: string = '';
  comfirmPassword: string = '';

  isNameCorrect: boolean = false;
  isPasswordCorret: boolean = false;

  valideateRegisterForm() {
    this.validateName();
    this.validatePassword();
    if (this.isNameCorrect && this.isPasswordCorret) {
      this.userRegisterService.addUser(this.name, this.password);
      console.log('In register component Name ' + this.name + ' Password ' + this.password)
    }
  }

  validateName() {
    if (this.name === '') {
      window.alert('Name can not be Empty !');
    } else {
      this.isNameCorrect = true;
    }
  }

  validatePassword() {
    if (this.password != this.comfirmPassword) {
      window.alert('Passwords are not the same ');
    }
    if (this.password === '') {
      window.alert('password can not be empty!');
    }
    if (this.password === this.comfirmPassword) {
      this.isPasswordCorret = true;
    }
  }

  constructor(private userRegisterService: RegisterService) { }

  ngOnInit(): void { }

}
