import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetsPage } from './tweets.page';

const routes: Routes = [
  {
    path: '',
    component: TweetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TweetsPageRoutingModule {}
