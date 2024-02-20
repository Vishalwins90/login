import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class FeatureModule { }
