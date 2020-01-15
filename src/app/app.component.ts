import { Component } from '@angular/core';
import { ITodo } from './interfaces';
import { Todo } from './interfaces' ;
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab-ToDo';
  newTodo: Todo = new Todo();
  filter: string = "";
  id: number;

  tasks: ITodo[] =[
    {
      task: 'Take out Trash',
      completed: false
    },
    {
      task: 'Clean Bathroom',
      completed: true
    },
    {
      task: 'Sweep Floors',
      completed: false
    },
    {
      task: 'Fix Sink',
      completed: false
    },
    {
      task: 'Wash Car',
      completed: false
    },
  ]

  addTodo() {
    this.tasks.push( this.newTodo );
    this.newTodo = new Todo();
  }

  removeTodo(i) {
    this.tasks.splice(i, 1);
  }

  getTodos() {
    return this.tasks.filter( todo => {
      if ( this.filter ) {
        return todo.task.includes(this.filter)
        } else {
          return true;
      }
    })
  }
 }
