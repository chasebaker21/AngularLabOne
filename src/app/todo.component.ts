import { Component } from '@angular/core';
import { Itodo } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class AppComponent {
  title = 'angular-lab-ToDo';

  tasks: Itodo[] =[
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
      completed: true
    },
    {
      task: 'Fix Sink',
      completed: false
    },
    {
      task: 'Wash Car',
      completed: true
    },
  ]

  // retrieves the button and list item then removes the complete button and
  // adds line through the list item text
  lineThrough() {
    let line = document.getElementById("numberOne");
    let button = document.getElementById("btn");
    line.style.textDecoration = "line-through";
    button.style.display = "none";
 }}
