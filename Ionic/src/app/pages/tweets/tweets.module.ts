import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TweetsPageRoutingModule } from './tweets-routing.module';

import { TweetsPage } from './tweets.page';
import { UnictDatePipe } from 'src/app/pipes/unict-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TweetsPageRoutingModule
  ],
  declarations: [TweetsPage, UnictDatePipe]
})
export class TweetsPageModule {}
