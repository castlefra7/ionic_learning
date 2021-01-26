import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MenuComponent } from '../components/menu/menu.component';
import { PlatComponent } from '../components/plat/plat.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PictureComponent } from '../components/picture/picture.component';

@NgModule({
  declarations: [ MenuComponent, PlatComponent, HomePage, PictureComponent],
  entryComponents: [],
  imports: [IonicModule, CommonModule, IonicModule.forRoot(), FormsModule, HomePageRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: []
})
export class HomePageModule {}
