import { Component } from '@angular/core';

import { TogglePage } from '../toggle/toggle';
import { SettingPage } from '../setting/setting';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TogglePage;
  tab2Root: any = SettingPage;
  // tab3Root: any = ContactPage;

  constructor() {

  }
}
