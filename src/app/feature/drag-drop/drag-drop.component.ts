import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  // standalone: true,
  // imports: [],
  // imports: [CdkDropListGroup, CdkDropList, CdkDrag,CommonModule,TodoComponent]
})
export class DragDropComponent {


}


