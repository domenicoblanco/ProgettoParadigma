import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { ProfilePage } from '../profile/profile.component';
import { UsersPage } from '../users/users.component';
import { TweetsPage } from '../tweets/tweets.component';

const routes: Routes = [{
  path: 'tabs',
  component: SidenavComponent,
  children: [{
    path: 'tweets',
    children: [{
      path: '',
      component: TweetsPage
    }]
  }, {
    path: 'users',
    children: [{
      path: '',
      component: UsersPage
    }]
  }, {
    path: 'profile',
    children: [{
      path: '',
      component: ProfilePage
    }]
  }, {
    path: '',
    redirectTo: '/tweets',
    pathMatch: 'full'
  }]
  },{
  path: '',
  redirectTo: '/tweets',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule {}
