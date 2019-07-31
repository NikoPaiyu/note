import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Todo } from '../_model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) {}

  uri = 'http://localhost:4000/todo';

  createNewTodo(todoObj: Todo) {
  return this._http.post(`${this.uri}/newTodo`,todoObj);
  }

  getAllTodos(){
    return this._http.get<Todo[]>(`${this.uri}/getTodoData`);
  }


}