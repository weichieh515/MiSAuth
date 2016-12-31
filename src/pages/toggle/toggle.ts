import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

//my import 
import { UserService } from '../../providers/user-service';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-toggle',
  templateUrl: 'toggle.html',
  providers: [UserService]
})
export class TogglePage implements OnInit {


  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    private userData: UserData,
    private storage: Storage
  ) { }

  ngOnInit() {

    this.storage.get('userData').then((val) => {
      if (val) {
        this.userData.setUserData(val);
      } else {
        this.navCtrl.parent.select(1);
      }
    });
  }

  toggle() {
    console.log(this.userData);

    this.login(this.userData);
  }

  login(user: UserData): void {
    if (!user) { return; }
    this.userService.login(user)
      .subscribe(data => {
        console.log('Login' + data);
        this.open();
      });
  }

  open(): void {
    console.log('open')
    this.userService.open()
      .subscribe(data => {
        console.log('Open' + data);
      });
  }

}
