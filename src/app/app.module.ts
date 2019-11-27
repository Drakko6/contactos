import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ContactoPage} from "../pages/contacto/contacto";
import {DetallePage} from "../pages/detalle/detalle";
import {HttpClientModule} from "@angular/common/http";
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {EditarPage} from "../pages/editar/editar";


export const firebaseConfig = {
  apiKey: "AIzaSyDo9r0O2i8i1SJH4EvcbWL22NuqIujG8Ys",
  authDomain: "contactos-3598d.firebaseapp.com",
  databaseURL: "https://contactos-3598d.firebaseio.com",
  projectId: "contactos-3598d",
  storageBucket: "contactos-3598d.appspot.com",
  messagingSenderId: "601875723383",
  appId: "1:601875723383:web:b0d29eed80e4be06860272"

}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactoPage,
    DetallePage,
    EditarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactoPage,
    DetallePage,
    EditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
