import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Camera} from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/File/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {IonicStorageModule} from '@ionic/storage';
import { TodoService } from './_services/todo.service';
import { LocalService } from './_services/local.service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    TodoService,
    LocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
