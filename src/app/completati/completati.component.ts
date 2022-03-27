import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoService from '../todos.service'

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  tasks!: Todo[];

  constructor() { }

  ngOnInit(): void {
    TodoService.prendi().then((todos) => (this.tasks = todos.filter(todo => todo.completed)));
  }

}
