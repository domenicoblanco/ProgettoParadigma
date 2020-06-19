import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { UnictDatePipe } from 'src/app/pipes/unict-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [UnictDatePipe],
})
export class TweetsPageModule {}
