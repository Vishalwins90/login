import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/guard/login.guard';
// import { unauthguard } from '../core/interceptor/unauth.guard';
import { unauthguard } from '../core/guard/unauth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

// const routes: Routes = [
//   { path: 'register', pathMatch: 'full', component: SignUpComponent,    canActivate: [unauthguard] },
//   { path: 'login', pathMatch: 'full', component: LoginComponent,    canActivate: [unauthguard] }  
//  ];
 const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate: [unauthguard]  },
  { path: 'signup', component: SignUpComponent,canActivate: [unauthguard]  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
