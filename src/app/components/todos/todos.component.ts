import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = 'Title';
  todos = [
    {
      content: 'First Todo',
      completed: 'false'
    },
    {
      content: 'Second Todo',
      completed: 'true'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
