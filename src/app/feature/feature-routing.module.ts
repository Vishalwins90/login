import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/guard/login.guard';
// import { unauthguard } from '../core/interceptor/unauth.guard';
import { unauthguard } from '../core/guard/unauth.guard';
import { HomeComponent } from './home/home.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { UserIstComponent } from './user-ist/user-ist.component';





 const routes: Routes = [

  // {path:'',component:DasboardComponent},

  { 
    path: '', 
    component: DasboardComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'editor', component: CodeEditorComponent},
      {path: 'add',component:EditdetailsComponent},
      {path:'user',component:UserRequestComponent},
       {path:'list',component:UserIstComponent},

    ],
  
  }




];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class featureRoutingModule { }