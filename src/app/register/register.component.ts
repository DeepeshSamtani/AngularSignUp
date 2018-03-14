import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';


@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user: User;
  loginStatus: number;

  constructor() {
    this.user = new User();
    this.loginStatus = -1;
  }


  signUp(userForm) {
    console.log(userForm.form);
    if (userForm.form.value.email == "deepesh@gmail.com" && userForm.form.value.password == "1234567")
      this.loginStatus = 1;
    else
      this.loginStatus = 0
  }
}
