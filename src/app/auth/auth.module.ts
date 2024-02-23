import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatTableModule} from '@angular/material/table';
// import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule,
    MatTableModule
    
  ]
})
export class AuthModule { }
