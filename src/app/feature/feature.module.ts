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
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AdminComponent } from './admin/admin.component';

// import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import{CdkDropListGroup} from '@angular/cdk/drag-drop';
import { TodoComponent } from './todo/todo.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { DragDropService } from '../core/drag-drop.service';
featureRoutingModule
@NgModule({
  declarations: [
    HomeComponent,
    PagenotfoundComponent,
    EditdetailsComponent,
    ConfirmationDialogComponent,
    AdminComponent,
    TodoComponent,
    DragDropComponent,
    TodoDoneComponent
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
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    DragDropModule,
    CommonModule
    
  ],
  providers: [DragDropService],
})
export class FeatureModule { }
