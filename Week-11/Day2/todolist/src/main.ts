// import {v4 as uuidv4} from 'uuid' ;

let clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement
let addButton = document.getElementById('addItem') as HTMLButtonElement
let taskInput = document.getElementById('newItem') as HTMLInputElement
let taskForm = document.getElementById('itemEntryForm') as HTMLFormElement
let listTasksUl = document.getElementById('listItems') as HTMLUListElement

let tasksList: TaskInter[] = []

interface TaskInter{
  id: number | string
  name: string
  isComplited: boolean
}

class Task implements TaskInter {
  constructor(public id: number | string, public name: string, public isComplited: boolean = false) {
    // this.id= Math.floor(Math.random()*99999999)
    // this.isComplited = false
  }

  changeIsComplited() {
    this.isComplited = !this.isComplited
  }
}



if (taskForm) {
  console.log(1);
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let id: number = Math.floor(Math.random() * 99999999)
    let name: string = taskInput.value.trim()
    console.log(id, name);

    let newTask = new Task(id, taskInput.value)
    tasksList.push(newTask)
    console.log(tasksList);
    createListTasks()
    // listTasksUl.innerHTML += `<li class="item">
    //   <input type="checkbox" id=${newTask.id} >
    //   <label for="2">${newTask.name}</label>
    //   <button class="button">X</button>
    // </li>`
    taskInput.value = ''
  })
}

const createListTasks = ()=>{
  listTasksUl.innerHTML =''
  tasksList.forEach((task )=>{
    listTasksUl.innerHTML += `<li class="item">
      <input type="checkbox" id=${task.id} >
      <label for="2">${task.name}</label>
      <button class="button" >X</button>
    </li>`
  })
}

function deleteTask (e:Event,i:number){
  e.preventDefault()
  tasksList.splice(i,1)
  createListTasks()
}



if (clearButton) {
  console.log(1);
  // clearButton.addEventListener('click',addTask)
}