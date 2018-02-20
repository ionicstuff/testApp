import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { InitiativePage } from '../pages/initiative/initiative';
import { LogoutPage } from '../pages/logout/logout';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  

  @ViewChild(Nav) nav: Nav;

  rootPage:any = LandingPage;

  pages: Array<{title: string, component: any, icon:string}>;
  categories: Array<{title: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Vote', component: HomePage, icon:'checkbox-outline' },
      
      { title:'Successes', component:HomePage, icon:'star'},
      { title: 'Invite', component: HomePage, icon:'share' },
      { title:'members', component:HomePage, icon:'book'},
      { title:'Messages', component:LandingPage, icon:'mail'},
      { title:'My Activity', component:LandingPage, icon:'disc'},
      {title:'Feedback', component:LandingPage, icon:'disc'},
      {title:'Logout', component:LogoutPage, icon:'log-out'}
      
    ];

    this.categories = [
      { title: 'Culture & Recreation'},
      { title: 'Education'},
      { title: 'Environment'},
      { title: 'Municipal Services'},
      { title: 'Other'},
      { title: 'Parking & Transportation'},
      { title: 'Planning & Permit'},
      { title: 'Public Safety'},
      { title: 'Taxes & Economy'},
      
      
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
 
  
}

