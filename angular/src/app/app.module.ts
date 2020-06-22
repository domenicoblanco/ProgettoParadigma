import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UniLoaderService } from './shared/uniLoader.service';
import { ToastService } from './shared/toast.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from './drawer/drawer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UnictDatePipe } from './pipes/unict-date.pipe';
import { DeleteProfileComponent } from './pages/delete-profile/delete-profile.component';

enableProdMode();

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
    DrawerComponent,
    UnictDatePipe,
    DeleteProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [
    UniLoaderService,
    ToastService,
    UsersPage,
    AuthService,
    DrawerComponent,
    {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
