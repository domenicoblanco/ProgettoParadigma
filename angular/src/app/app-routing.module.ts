import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.component';
import { NewTweetPage } from './pages/new-tweet/new-tweet.component';
import { ProfilePage } from './pages/profile/profile.component';
import { SignupPage } from './pages/signup/signup.component';
import { UsersPage } from './pages/users/users.component';
import { ModalContentPage } from './pages/modal-content/modal-content.component';
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
    path: 'new-tweet',
    component: NewTweetPage,
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
  },
  {
    path: 'modal-content',
    component: ModalContentPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
