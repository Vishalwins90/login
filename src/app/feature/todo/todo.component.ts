import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';
import { DragDropService } from 'src/app/core/drag-drop.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

constructor( public dropdown:DragDropService){

}
onDrop(event: CdkDragDrop<any[]>) {
  this.dropdown.drop(event);
}

}
