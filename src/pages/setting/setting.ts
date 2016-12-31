import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

//my import 

import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})


export class SettingPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private userData: UserData,
    private storage: Storage) { }


  ngOnInit() {    

  }

  storeUserData(){
    this.storage.set('userData', this.userData);
  }

}
