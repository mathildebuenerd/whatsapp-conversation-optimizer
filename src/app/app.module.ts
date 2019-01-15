import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactsPage } from "../pages/contacts/contacts";
import { ContactProfilePage } from "../pages/contacts/contact-profile/contact-profile";
import { TabsPage } from "../pages/tabs-menu/tabs-menu";

import { TextAnalysisService } from "../services/TextAnalysis.service";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ContactsPage,
    // ContactProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactsPage,
    ContactProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextAnalysisService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
