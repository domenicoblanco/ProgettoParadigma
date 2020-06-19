import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.component';
import { TweetsPage } from './pages/tweets/tweets.component';
import { SignupPage } from './pages/signup/signup.component';
import { UsersPage } from './pages/users/users.component';
import { ProfilePage } from './pages/profile/profile.component';
import { NewTweetPage } from './pages/new-tweet/new-tweet.component';
import { ModalContentPage } from './pages/modal-content/modal-content.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { UniLoaderService } from './shared/uniLoader.service';
import { ToastService } from './shared/toast.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TweetsPage,
    UsersPage,
    ProfilePage,
    NewTweetPage,
    SignupPage,
    ModalContentPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [
    UniLoaderService,
    ToastService,
    UsersPage,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
