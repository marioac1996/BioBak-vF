import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";


import {AngularFireModule} from "@angular/fire";
import {environment} from '../environments/environment';
import {AuthenticationService} from './services/authentication.service';
import {AngularFirestoreModule,FirestoreSettingsToken} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import * as firebase from 'firebase';


firebase.initializeApp(environment.firebase);

import {Geolocation} from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule, 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    WebView,
    Camera,
    File,
    AuthenticationService,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
