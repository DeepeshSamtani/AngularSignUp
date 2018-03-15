import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {
  fields:string[];
  data:string[];

  viewList: boolean;

  constructor() { 
    this.fields=[];
    this.data=[];
  }

  ngOnInit() {
  }

  addFiels() {
    this.fields.push("");
    this.data.push("");
  }

  view(){
    this.viewList = true;
  }
}
