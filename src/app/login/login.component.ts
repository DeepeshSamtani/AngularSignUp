import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';
import {AuthService} from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User;
  users: any[];
  loginStatus: number;

  constructor(public auth:AuthService, public api:ApiService) {
    this.user = new User();
    this.loginStatus = -1;
  }

  ngOnInit() {
    this.api.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

  //Validating from rest call
  validate(userForm)
  {    console.log(userForm.form);
       for(let i=0;i<this.users.length;i++){
         console.log("Hi : "+userForm.form.value.email +":"+this.users[i].email + "--"+userForm.form.value.password +":"+this.users[i].username)
        if(userForm.form.value.email == this.users[i].email && userForm.form.value.password == this.users[i].username){
          this.loginStatus = 1;
          this.auth.setLoginCode(1);
          this.auth.setCurrentUser(this.user.email);
          break;
        }
        else
          this.loginStatus=0;
       }

  }


  signUp(userForm) {
    if (userForm.form.value.email == "sammy3012" && userForm.form.value.password == "1234567")
   {   this.loginStatus = 1;
      this.auth.setLoginCode(1);
      this.auth.setCurrentUser(this.user.email);
  }
    else
      this.loginStatus = 0
  }
}


