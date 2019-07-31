import {
  Component,
  OnInit
} from '@angular/core';
import {
  Todo,
  TodoListName,
} from '../_model/todo.model';
import {
  LocalService
} from '../_services/local.service';
import {
  Router
} from '@angular/router';
import {
  AlertController
} from '@ionic/angular';
import {
  ToastController
} from '@ionic/angular';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  // Creating a Todo Object
  todoData: Todo;

  // Creating a Todo List Object
  todoListData: TodoListName;

  // Creating a TodoListArray
  todoListNameArr: TodoListName[] = [];

  // Creating a Todo Arr
  todoArr: Todo[] = [];

  // Dependcy Injection
  constructor(private _service: LocalService, private _router: Router, public alertController: AlertController, private _toastController: ToastController,private _todoservice: TodoService) {}


  ngOnInit(): void {

    // Creating a New Todo Object
    this.creatingNewTodo();

  }

  // Creating a New Todo Object
  creatingNewTodo() {
    this.todoData = new Todo();
  }

  // Creating a New Todo List Object
  creatingNewListName() {
    this.todoListData = new TodoListName();
    return this.todoListData;
  }

  // Calling Popup
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
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

  addTodoList() {
    // Pushing the Todo Data inside Todo Array
    this.todoListNameArr.push(this.creatingNewListName());
  }

  deleteTodoListItem(index: number){

    // Deleting from the todo
    this.todoListNameArr.splice(index,1);

    // Show the Toast
    this.presentToast('List Item has been deleted !');

  }

  refreshTodo(){

    // Resetting
    this.creatingNewTodo();
    this.todoListNameArr = [];

    //After Resetting
    this.presentToast('Reset Done !');

  }

  validatingTodo():boolean {

    // Title is Empty
    if(this.todoData.title === ''){
      this.presentAlert('Please Fill Title');
      return true
    }

    // All Validation Passed
    return false
  }

  saveTodo(){ 

    // Calling Validation
    if(this.validatingTodo()){
      return true;
    }

    // To init DB
    this.todoData.todoListArr = this.todoListNameArr ;
    this.todoData.pendingTodoListCount = this.todoData.todoListArr.length ;
    this.todoArr.push(this.todoData);
    this._service.setTodoArr(this.todoArr);

    // To Save in DB
    this._todoservice.createNewTodo(this.todoData).subscribe(todoResponse => {

        if(todoResponse['Success'] === 1){
      this.navigateBackToHome('Todo Created')
        }else {
          this.presentToast(this._service.error);
        }

    });

    // Navigate Back to Home


  }

  navigateBackToHome(message:string) {

    // Presenting the Todo Message
    this.presentToast(message);

    // Navigating to Home 
    this._router.navigate(['/']);
  }

}