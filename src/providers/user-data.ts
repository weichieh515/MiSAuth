import { Injectable } from '@angular/core';

@Injectable()
export class UserData {

  username: string;
  password: string;

  constructor() {
    this.username = '',
    this.password = ''
  }

  setUserData(user: UserData) {
    this.username = user.username;
    this.password = user.password;
  }

}
