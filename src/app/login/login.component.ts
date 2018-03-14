import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';
import {AuthService} from '../auth.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User;
  loginStatus: number;

  constructor(public auth:AuthService) {
    this.user = new User();
    this.loginStatus = -1;
  }


  signUp(userForm) {
    console.log(userForm.form);
    if (userForm.form.value.email == "sammy3012" && userForm.form.value.password == "1234567")
   {   this.loginStatus = 1;
      this.auth.setLoginCode(1);
      this.auth.setCurrentUser(this.user.email);
  }
    else
      this.loginStatus = 0
  }
}
