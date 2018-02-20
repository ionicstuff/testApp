import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InitiativePage } from '../initiative/initiative';
import { AddinitiativePage } from '../addinitiative/addinitiative';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  responseData: any;
  initiativelist:any;
  initiativeID:any;

  latest: string = "latest";

  public userDetails : any;

  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    this.userDetails = data.userlist;
    
    this.getInitiatives();
    
  }

  getInitiatives(){
    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     catid:0, 
     tab:"latest",
     communityid:this.userDetails.CommunityID,
     userid:this.userDetails.UserID,
     initiativetype:0
    };
      
    //API Document here
    this.authServiceProvider.postData(userData, "getinitiatives").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.initiativelist = this.responseData.initiativelist;
      console.log(this.initiativelist[0]);
      
    
  }, (err)=>{
    //Connection failed or something like that
  })
  }

  singleinitiative(initiativeID:any){
    this.navCtrl.push(InitiativePage, {singleID: initiativeID});
  }

  addInitiative(){
    this.navCtrl.push(AddinitiativePage);
  }
}
