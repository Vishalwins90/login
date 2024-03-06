import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { DragDropService } from 'src/app/core/drag-drop.service';

@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.css']
})
export class TodoDoneComponent {
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
constructor(public dropdown:DragDropService){

}
  onDrop(event: CdkDragDrop<any[]>) {
    this.dropdown.drop(event);
  }
}
