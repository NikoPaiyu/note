
export class Todo {
    constructor() {}
    title: string = '';
    todoListArr: TodoListName[] = [];
    completedTodoListArr: any[] = [];
    pendingTodoListArr: any[] = [];
    completedTodoListCount: number = 0;
    pendingTodoListCount: number = 0;
    createdDate = new Date(Date.now());
}

export class TodoListName {
    constructor() {}
    todoListName = {
        listName: '',
        isCompleted: false
    };
}