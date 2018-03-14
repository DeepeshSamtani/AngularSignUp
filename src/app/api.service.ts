import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(public http: Http) {

  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json);
  }

}
