import {
  Component,
  OnInit
} from '@angular/core';
import {
  LocalService
} from '../_services/local.service';
import {
  Todo,
  TodoListName
} from '../_model/todo.model';
import {
  ToastController
} from '@ionic/angular';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.page.html',
  styleUrls: ['./detail-todo.page.scss'],
})
export class DetailTodoPage implements OnInit {

  // Todo Obj
  todoDetailObj: Todo;

  // Todo Obj
  todoArr: Todo[];

  // Todo Detail Array
  todoListNameArr: TodoListName[] = [];

  // Creating a Todo List Object
  todoListData: TodoListName;

  constructor(private _service: LocalService, private _toastController: ToastController, private _router: Router) {}

  ngOnInit() {

    // Getting the Todo Obj
    this.gettingSingleTodoObj();

    // Getting the Todo Arr
    this.gettingTodoArr();

    // Assiging the Todo Arr
    this.todoListNameArr = this.todoDetailObj['todoListArr'];

  }

  // Getting the Todo Arr
  gettingTodoArr() {
    this._service.$todoDataArrayResponse.subscribe((todoArr: Todo[]) => {
      this.todoArr = todoArr;
    });
  }

  // Getting the Todo Obj
  gettingSingleTodoObj() {
    this._service.$todoDetailObjectResponse.subscribe((detailObj: Todo) => {
      this.todoDetailObj = detailObj;
    });
  }

  // Creating a New Todo List Object
  creatingNewListName() {
    this.todoListData = new TodoListName();
    return this.todoListData;
  }

  // Adding new Todo List Obj
  addTodoList() {
    this.todoListNameArr.push(this.creatingNewListName());
  }

  // Updating
  updateTodoList() {

    // this.todoArr.push(this.todoDetailObj);
    this._service.setTodoArr(this.todoArr);
    this.presentToast('Todo Updated');
    this._router.navigate(['/']);

  }

  // Todo Completion Selection
  taskCompleted(todoObj: any, index: number, e: any) {

    if (e.detail.checked === true) {

      todoObj.isCompleted = true;
      this.todoDetailObj.completedTodoListArr.push(todoObj);
      this.todoDetailObj.completedTodoListCount = +1;
      this.todoDetailObj.pendingTodoListCount = this.todoDetailObj.pendingTodoListCount - 1;

    } else {

      this.todoDetailObj.completedTodoListCount - 1;
      this.todoDetailObj.pendingTodoListCount + 1;
      todoObj.isCompleted = false;

    }

  }

  // Calling Toast
  async presentToast(message: string) {
    const toast = await this._toastController.create({
      message: message,
      mode: 'md',
      duration: 2000
    });
    toast.present();
  }

}