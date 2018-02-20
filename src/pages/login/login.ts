import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistrationPage } from '../registration/registration';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData: any;
  userData = {"username":"", "password":""};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authServiceProvider: AuthServiceProvider
  ){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    let userData: any;
    //API Document here
    this.authServiceProvider.postData(this.userData, "login").then((result)=>{
    this.responseData = result;
    //console.log(this.responseData);
    localStorage.setItem('userData', JSON.stringify(this.responseData))
    this.navCtrl.push(HomePage);
  }, (err)=>{
    //Connection failed or something like that
  })
    
  }

  signin(){

    this.navCtrl.push(RegistrationPage);
  }

}
