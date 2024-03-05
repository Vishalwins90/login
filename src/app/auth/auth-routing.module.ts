import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/guard/login.guard';
import { unauthguard } from '../core/guard/unauth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { resetguard } from '../core/guard/reset.guard';


 const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate: [unauthguard]  },
  { path: 'signup', component: SignUpComponent,canActivate: [unauthguard]  },
  { path: 'forgot',component:ForgotPasswordComponent},
  {path:'',component:ResetPasswordComponent},
 

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
