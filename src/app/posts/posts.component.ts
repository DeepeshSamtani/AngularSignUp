import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Http,HttpModule} from '@angular/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[];
  progressFlag:boolean;

  constructor(public api : ApiService) {
    this.progressFlag = true;
   }

  ngOnInit() {
    this.api.getPosts().subscribe(res => {
      this.posts = res;
      this.progressFlag = false;
    });
  }

}
