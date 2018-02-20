import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitiativePage } from './initiative';

@NgModule({
  declarations: [
    InitiativePage,
  ],
  imports: [
    IonicPageModule.forChild(InitiativePage),
  ],
})
export class InitiativePageModule {}
