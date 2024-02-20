import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guard/login.guard';
// import { unauthguard } from './core/interceptor/unauth.guard';
import { unauthguard } from './core/guard/unauth.guard';
import { PagenotfoundComponent } from './feature/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[unauthguard]
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },

{
  path:'home',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
 canActivate:[AuthGuard]
},


{ path: '**', pathMatch: 'full',  
component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
