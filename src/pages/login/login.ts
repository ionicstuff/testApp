import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    public authServiceProvider: AuthServiceProvider,
    private toastCtrl:ToastController
  ){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    if(this.userData.username && this.userData.password){

      //API Document here
      this.authServiceProvider.postData(this.userData, "login").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if(this.responseData.userlist){
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      //console.log(this.responseData.status);    
      this.navCtrl.push(HomePage);
      }
      else{
        this.presentToast("Please give valid username and password");
      }
    }, (err)=>{
      //Connection failed or something like that
    })
    
    }
    else{
      this.presentToast("Give username and password");
     }
  

  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  signin(){

    this.navCtrl.push(RegistrationPage);
  }

}
