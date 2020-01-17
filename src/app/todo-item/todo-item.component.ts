import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../interfaces';
import { LoggerService } from 'src/logger.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [LoggerService]
})
export class TodoItemComponent implements ITodo {

  @Input() task : string;
  @Input() completed : boolean;
  @Input() id : number;

  @Output() deleted = new EventEmitter();

  constructor(private logger: LoggerService) {
   }

  completeTask() {
    this.completed = true;
  }

  removeTodo() {
    // sends to deleteItem() in app.component.ts
    this.deleted.emit();
    this.logger.log(`deleted` + this.task)
  }

}


