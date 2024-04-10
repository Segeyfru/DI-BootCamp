export class TodoList{
    constructor(){
        this.todos = []
    }
    addTask(task){
        let newTask = {
            id: this.todos.length,
            task: task,
            complited: false
        }
        this.todos.push(newTask)
        return newTask
    }
    markTask(task){
        this.todos.forEach(todo => {
            if(todo.task === task){
                todo.complited = true
                console.log('complited', todo);
                return 'complited', todo
            }
        })
        console.log('not faunded');
    }
    listOfTasks(){
        this.todos.forEach(todo => console.log(todo))
    }
}

