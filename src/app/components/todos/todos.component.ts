import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title:string = 'my list';
  todos:Todo[];

  inputNote:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      // {
      //   content: "First todo",
      //   completed: false
      // },
      // {
      //   content: "Second todo",
      //   completed: false
      // }
    ]
  }

  // loop thorugh all todos and check if matches the id
  toggleDone(id:Number) {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      return value;
    })
  }

  deleteTodo(id:Number) {
    this.todos = this.todos.filter((value, index) => index !== id)
  }

  addTodo () {
    this.todos.push({
      content : this.inputNote,
      completed : false
    });

    this.inputNote = "";
  }

}
