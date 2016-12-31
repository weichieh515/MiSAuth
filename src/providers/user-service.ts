import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserData } from './user-data';

@Injectable()
export class UserService {

  private url = 'http://192.168.1.36:9999/door';



  constructor(public http: Http) {
  }

  door() {
    return this.http.get(this.url)
      .map(response => response.json());
  }

  login(user: UserData){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.url + '/login/', JSON.stringify(user), { headers: headers })
      .map(response => response.json())
  }

  open() {
    return this.http.get(this.url + '/418/open/')
      .map(response => response.json())
  }

}
