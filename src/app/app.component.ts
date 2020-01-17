import { Component, Input } from "@angular/core";
import { ITodo } from "./interfaces";
import { Todo } from "./interfaces";
import { LoggerService } from "src/logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [LoggerService]
})
export class AppComponent {
  title = "angular-lab-ToDo";
  newTodo: Todo = new Todo();
  filter: string = "";
  id: number;

  tasks: ITodo[] = [
    {
      task: "take out trash",
      completed: false
    },
    {
      task: "clean bathroom",
      completed: true
    },
    {
      task: "sweep floors",
      completed: false
    },
    {
      task: "fix sink",
      completed: false
    },
    {
      task: "wash car",
      completed: false
    }
  ];

  constructor(private logger: LoggerService) {
     this.logger.log('in the App component')
  }

  addTask() {
    this.tasks.push(this.newTodo);
    this.newTodo = new Todo();
  }

  deleteItem(index) {
    this.tasks.splice(index, 1);
  }

  getTodos() {
    return this.tasks.filter(todo => {
      if (this.filter) {
        return todo.task.includes(this.filter);
      } else {
        return true;
      }
    });
  }
}
