import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.component';
import { ProfilePage } from './pages/profile/profile.component';
import { SignupPage } from './pages/signup/signup.component';
import { UsersPage } from './pages/users/users.component';
import { TweetsPage } from './pages/tweets/tweets.component';

const routes: Routes = [
  {
    path: '',
    component: TweetsPage,
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'tweets',
    component: TweetsPage
  },
  {
    path: 'users',
    component: UsersPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
