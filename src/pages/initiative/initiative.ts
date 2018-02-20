import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LatestPage } from '../latest/latest';
import { ArchivedPage } from '../archived/archived';
import { RankedPage } from '../ranked/ranked';
import { AddinitiativePage } from '../addinitiative/addinitiative';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the InitiativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initiative',
  templateUrl: 'initiative.html',
})
export class InitiativePage {

  responseData: any;
  initiativelist:any;
  latest: string = "latest";
  initiativeid: any;
  singleID:any;
  public userDetails : any;
  username:any;

  latestPage = LatestPage;
  archivedPage = ArchivedPage;
  rankedPage = RankedPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modal:ModalController,
    public authServiceProvider: AuthServiceProvider
  ) {

    //getting initiative id
    this.initiativeid = this.navParams.get('singleID');
    //console.log(this.initiativeid);


    const data = JSON.parse(localStorage.getItem('userData'));
    //console.log(data);
    this.userDetails = data.userlist;
    this.username = this.userDetails['UserFullName'];
    
    this.getInitiativesByID();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitiativePage');
  }

  getInitiativesByID(){

    let userData: any;
    
    //console.log(this.userDetails);
   userData = {
     pid:this.initiativeid
     
    };
      
    //API Document here
    this.authServiceProvider.postData(userData, "getinitiativebyid").then((result)=>{
      //console.log(result);
      this.responseData = result;
      this.initiativelist = this.responseData.initiatives;
      //console.log(this.initiativelist[0]);
      
      
    
  }, (err)=>{
    //Connection failed or something like that
  })

  }
  addInitiative(){
    this.navCtrl.push(AddinitiativePage);
  }
  openModal(){
    const myModal= this.modal.create('CommentsPage');

    myModal.present();
  }

}
