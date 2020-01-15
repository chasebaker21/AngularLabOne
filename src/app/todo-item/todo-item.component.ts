import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../interfaces';
import { Todo } from '../interfaces' ;


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements ITodo {

  @Input() task : string;
  @Input() completed : boolean;


  constructor() {
   }

  ngOnInit() {
  }

}
