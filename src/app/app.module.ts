import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {User} from './User';
import {RouterModule,Routes} from '@angular/router';  

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import {AuthService} from './auth.service';
import { BasepageComponent } from './basepage/basepage.component';

const appRoutes:Routes = [

  {path:'', component:BasepageComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     RegisterComponent,
     LoginComponent,
      NavbarComponent,
      BasepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
