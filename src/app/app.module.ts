import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { InitiativePage } from '../pages/initiative/initiative';
import { RegistrationPage } from '../pages/registration/registration';
import { LogoutPage } from '../pages/logout/logout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatCardModule, MatIconModule } from '@angular/material';
import { LatestPage } from '../pages/latest/latest';
import { ArchivedPage } from '../pages/archived/archived';
import { RankedPage } from '../pages/ranked/ranked';
import { TabsPage } from '../pages/tabs/tabs';
import { AddinitiativePage } from '../pages/addinitiative/addinitiative';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LandingPage,
    RegistrationPage,
    InitiativePage,
    LatestPage,
    ArchivedPage,
    RankedPage,
    TabsPage,
    AddinitiativePage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LandingPage,
    RegistrationPage,
    InitiativePage,
    LatestPage,
    ArchivedPage,
    RankedPage,
    TabsPage,
    AddinitiativePage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
