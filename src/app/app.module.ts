import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {RouterModule} from '@angular/router';
import {TodosService} from './todos.service';

// Define ROUTES
const ROUTES = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
