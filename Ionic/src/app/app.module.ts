import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnictDatePipe } from './pipes/unict-date.pipe';

import { HttpClientModule } from '@angular/common/http';
import { NewTweetPageModule } from './pages/new-tweet/new-tweet.module';
import { UniLoaderService } from './shared/uniLoader.service';
import { UniAlertService } from './shared/uniAlert.service';
import { ToastService } from './shared/toast.service';
import { UsersPage } from 'src/app/pages/users/users.page';
import { ModalContentPage } from 'src/app/pages/modal-content/modal-content.page';

enableProdMode();

@NgModule({
  declarations: [AppComponent, UnictDatePipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NewTweetPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniLoaderService,
    UniAlertService,
    ToastService,
    UsersPage,
    ModalContentPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
