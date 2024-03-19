import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatTableModule } from '@angular/material/table'
import { MainRoutingModule } from '../auth/auth-routing.module';
import { featureRoutingModule } from './feature-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

// import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

 import { SharedModule } from '../shared/shared.module';

import { DragDropService } from '../core/drag-drop.service';
import { DasboardComponent } from './dasboard/dasboard.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular"
import { MatFormFieldModule } from "@angular/material/form-field";
import { UserRequestComponent } from './user-request/user-request.component';
import { AdminassigenComponent } from './adminassigen/adminassigen.component';
import {MatSelectModule} from '@angular/material/select';
import { UserIstComponent } from './user-ist/user-ist.component';
import {MatTabsModule} from '@angular/material/tabs';
featureRoutingModule
@NgModule({
  declarations: [
    HomeComponent,
    PagenotfoundComponent,
    EditdetailsComponent,
    ConfirmationDialogComponent,
    UserRequestComponent,
    DasboardComponent,
    CodeEditorComponent,
    AdminassigenComponent,
    UserIstComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MainRoutingModule,
    featureRoutingModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    DragDropModule,
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    CKEditorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule
    
  ],
  providers: [DragDropService],
})
export class FeatureModule { }
