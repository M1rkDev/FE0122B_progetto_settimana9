import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosComponent } from './todos/todos.component';
import { CompletatiComponent } from './completati/completati.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
