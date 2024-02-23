import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatTableModule } from '@angular/material/table'  
import { MainRoutingModule } from '../auth/auth-routing.module';
import { featureRoutingModule } from './feature-routing.module';
featureRoutingModule
@NgModule({
  declarations: [
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    // MainRoutingModule
    featureRoutingModule
  ]
})
export class FeatureModule { }
