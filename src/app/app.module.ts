import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';

import{LoginPageModule} from './login/login.module';
import{ViewPageModule} from './view/view.module';
import {ComPageModule} from './com/com.module'
import {ComparePageModule} from './compare/compare.module'

import{AngularFireModule} from 'angularfire2';
//import{AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCJB-bV51AWLlaRQSC5Cx_3AxXlnWP7SaM",
  authDomain: "proj444-78924.firebaseapp.com",
  databaseURL: "https://proj444-78924.firebaseio.com",
  projectId: "proj444-78924",
  storageBucket: "proj444-78924.appspot.com",
  messagingSenderId: "23838974942",
  appId: "1:23838974942:web:e1f98d523ca04d3d3c334f",
  measurementId: "G-VR25ZEDTQL"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            IonicStorageModule.forRoot(),
            LoginPageModule,
            ViewPageModule,
            ComPageModule,
            ComparePageModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFirestoreModule,
            AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
