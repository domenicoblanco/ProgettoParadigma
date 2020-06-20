import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnictDatePipe } from 'src/app/pipes/unict-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [UnictDatePipe],
})
export class TweetsPageModule {}
