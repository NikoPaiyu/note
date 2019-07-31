import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  LocalService
} from '../_services/local.service';
import {
  Todo
} from '../_model/todo.model';
import {
  Camera,
  CameraOptions
} from '@ionic-native/camera/ngx';
import {
  TodoService
} from '../_services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoData: Todo[];

  constructor(private _router: Router, private _service: LocalService, public camera: Camera, private _todoService: TodoService) {}

  // Navigate to create new Todo
  goToAddTodo() {
    this._router.navigate(['/add-todo']);
  }

  // Activity Life Cycle
  ionViewWillEnter() {
    this.gettingExistingTodoData();
  }

  // To get The existing Todo Array Data
  gettingExistingTodoData() {

    this._todoService.getAllTodos().subscribe(todos => {
      this.todoData = todos;
      console.log(todos);
    }, err => {
      console.log(this._service.error);
    });

  }

  // Navigating to Todo Detail
  goToTodoDetail(todoObj: Todo) {
    this._service.setTodoDetailObj(todoObj);
    this._router.navigate(['/detail-todo',todoObj['_id']]);
  }

}