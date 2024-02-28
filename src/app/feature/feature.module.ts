import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatTableModule } from '@angular/material/table'  
import { MainRoutingModule } from '../auth/auth-routing.module';
import { featureRoutingModule } from './feature-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
featureRoutingModule
@NgModule({
  declarations: [
    HomeComponent,
    PagenotfoundComponent,
    EditdetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    // MainRoutingModule
    featureRoutingModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule
  ]
})
export class FeatureModule { }
