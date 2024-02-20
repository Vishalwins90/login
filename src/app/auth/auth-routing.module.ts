import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/guard/login.guard';
// import { unauthguard } from '../core/interceptor/unauth.guard';
import { unauthguard } from '../core/guard/unauth.guard';


  const routes: Routes = [
 {
  path:'',
  component:LoginComponent,

 }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
