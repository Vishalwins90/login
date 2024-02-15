import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './auth-routing.module';
// import {MainRoutingModule} from 
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule
  ]
})
export class AuthModule { }
