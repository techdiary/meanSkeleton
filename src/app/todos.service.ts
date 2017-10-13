import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TodosService {

  constructor(private http: Http) { }

  // Get all todos from api
  getAllTodos() {
    return this.http.get('/api/todo')
      .map(res => res.json());
  }
}
