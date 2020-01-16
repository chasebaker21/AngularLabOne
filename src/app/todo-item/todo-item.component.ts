import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../interfaces';


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements ITodo {

  @Input() task : string;
  @Input() completed : boolean;
  @Input() id : number;

  constructor() {
   }

  ngOnInit() {
  }

  toggleTodoComplete() {
    this.completed = true;
  }

}


