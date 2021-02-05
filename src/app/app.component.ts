import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    public afDB: AngularFireDatabase
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.add();
  }


  add() {
    this.afDB.list('people').valueChanges().subscribe(tab => {
      console.log(tab);
    })
    // console.log(this.afDB.list('people/'));
    // this.afDB.list('people/').push({
    //   name: 'jean'
    // });
  }
}
