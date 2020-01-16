import { Component, Input } from '@angular/core';
import { ITodo } from './interfaces';
import { Todo } from './interfaces' ;

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
  @Input() i : boolean;

  tasks: ITodo[] =[
    {
      task: 'take out trash',
      completed: false
    },
    {
      task: 'clean bathroom',
      completed: true
    },
    {
      task: 'sweep floors',
      completed: false
    },
    {
      task: 'fix sink',
      completed: false
    },
    {
      task: 'wash car',
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
