import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoService from '../todos.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  tasks!:Todo[]

  nTitolo:string | undefined
  constructor() {
    TodoService.prendi().then(todos=>this.tasks = todos.filter(todo=>!todo.completed))
  }

  ngOnInit(): void {
  }
  async aggiungiTask(){
   const nTodo =  await TodoService.aggiungi({title:this.nTitolo as string,completed:false})
   this.tasks.push(nTodo);
   this.nTitolo = ''
  }
  async completeTask(todo:Todo,i:number){
    await TodoService.aggiorna({completed:true},todo.id)
    this.tasks.splice(i,1)
  }

}
