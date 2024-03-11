import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { FeatureModule } from '../feature/feature.module';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule
  ],
  exports:[
    LayoutComponent,
    SidenavComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
