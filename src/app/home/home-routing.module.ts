import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherprotectedComponent } from '../components/anotherprotected/anotherprotected.component';
import { LoginComponent } from '../components/login/login.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PictureComponent } from '../components/picture/picture.component';
import { PlatdetailsComponent } from '../components/platdetails/platdetails.component';
import { ProtectedComponent } from '../components/protected/protected.component';
import { LoggedInGuard } from '../logged-in.guard';
import { AUTH_PROVIDERS } from '../services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'picture',
    component: PictureComponent
  },
  {
    path: 'menu/:id',
    component: PlatdetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'anotherprotected',
    component: AnotherprotectedComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
})
export class HomePageRoutingModule { }
