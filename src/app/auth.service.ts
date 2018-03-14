import { Injectable } from '@angular/core';
import {User} from './User'
@Injectable()
export class AuthService {

  loginCode;
  currentUser:User;

  constructor() {
    this.loginCode = -1
   }


   getLoginCode(){
     return this.loginCode;
   }

   setLoginCode(loginCode){
     return this.loginCode = loginCode;
   }

   getcurrentUser(){
    return this.currentUser;
  }

  setCurrentUser(currentUser){
    return this.currentUser = currentUser;
  }

}
