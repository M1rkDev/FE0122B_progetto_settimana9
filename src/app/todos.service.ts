import { Todo } from "./models/todo";

let mioTodo:Todo[] = [];


//lettura Array

export function prendi(): Promise<Todo[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(mioTodo);
    }, 2000);
  });
}


//push tasks nell array

export function aggiungi(x: Omit<Todo, 'id'>): Promise<Todo> {
  return new Promise((res) => {
    setTimeout(() => {
      const newTodo: Todo = { ...x, id: mioTodo.length + 1 };
      mioTodo.push(newTodo)
      res(newTodo);
    }, 2000);
  });
}

export function aggiorna (n: Partial<Todo>, id: number):Promise<Todo>{
  return new Promise((res, rej) => {
    setTimeout(() => {
      mioTodo = mioTodo.map((todo) =>
        todo.id == id ? { ...todo, ...n } : todo
      );
      const aggiornaTodo = mioTodo.find((todo) => todo.id == id);
      if (aggiornaTodo) {
        res(aggiornaTodo);
      }
    }, 2000);
  })
}
