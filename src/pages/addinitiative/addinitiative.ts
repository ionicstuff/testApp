import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the AddinitiativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addinitiative',
  templateUrl: 'addinitiative.html',
})
export class AddinitiativePage {

  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddinitiativePage');
  }
  addInitiative(){
    this.navCtrl.push(HomePage);
  }
}
