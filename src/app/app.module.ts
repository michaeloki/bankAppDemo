import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpModule } from '@angular/http';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { PopupFormComponent } from './pages/popup-form/popup-form.component';
import { OpenAccountComponent } from './pages/open-account/open-account.component';

@NgModule({
  declarations: [AppComponent,
    DashboardComponent,
    DetailsComponent,
    PopupFormComponent,
    OpenAccountComponent
    ],
  entryComponents: [
    PopupFormComponent,
    OpenAccountComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    HTTP,
    Platform,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
