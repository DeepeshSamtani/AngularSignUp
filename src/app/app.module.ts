import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {User} from './User';
import {RouterModule,Routes} from '@angular/router';  
import {HttpModule,Http} from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import {AuthService} from './auth.service';
import { BasepageComponent } from './basepage/basepage.component';
import { PostsComponent } from './posts/posts.component';
import { ApiService } from './api.service';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

const appRoutes:Routes = [

  {path:'', component:BasepageComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'posts', component:PostsComponent},
  {path:'dynamic', component:DynamicPageComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     RegisterComponent,
     LoginComponent,
      NavbarComponent,
      BasepageComponent,
      PostsComponent,
      DynamicPageComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [AuthService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
