import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankedPage } from './ranked';

@NgModule({
  declarations: [
    RankedPage,
  ],
  imports: [
    IonicPageModule.forChild(RankedPage),
  ],
})
export class RankedPageModule {}
