import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/login.guard';
import { unauthguard } from './core/interceptor/unauth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[unauthguard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
{
  path:'home',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
 canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
