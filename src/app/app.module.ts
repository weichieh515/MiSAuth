import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingPage } from '../pages/setting/setting';
// import { ContactPage } from '../pages/contact/contact';
import { TogglePage } from '../pages/toggle/toggle';
import { TabsPage } from '../pages/tabs/tabs';


import { UserData } from '../providers/user-data';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    SettingPage,
    // ContactPage,
    TogglePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingPage,
    // ContactPage,
    TogglePage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, UserData, Storage]
})
export class AppModule { }
