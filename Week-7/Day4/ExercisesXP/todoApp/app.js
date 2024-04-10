import { TodoList } from "./todo.js";
let list1 = new TodoList()

list1.addTask('NodeJS')
list1.addTask('Python')
list1.addTask('Buy milk')
list1.listOfTasks()
list1.markTask('NodeJS')
list1.listOfTasks()
