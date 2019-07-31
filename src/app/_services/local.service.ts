import { Injectable } from '@angular/core';
import { Todo } from '../_model/todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocalService {

  constructor() { }

  error = 'We Encontered an error  , Please refresh !';
  successMessage = '';

  private todoDataArraySource = new BehaviorSubject([]);
  $todoDataArrayResponse = this.todoDataArraySource.asObservable();

  private todoDetailObjectSource = new BehaviorSubject({});
  $todoDetailObjectResponse = this.todoDetailObjectSource.asObservable();


  setTodoArr(todoArr: any) {
      this.todoDataArraySource.next(todoArr);
  }

  setTodoDetailObj(todoDetailObj: Todo){
    this.todoDetailObjectSource.next(todoDetailObj);
  }

}
