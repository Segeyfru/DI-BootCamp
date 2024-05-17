import { createSlice, nanoid } from '@reduxjs/toolkit'
import { isComplited } from '../tasks/tasksSlice'


const initialState = {
    tasks: [
        { id: 0, name: 'Daily Challenge', isComplited: false, date: '2024-05-14', toggleEdit: false },
    ],
    all: false
}

export const dailySlice = createSlice({
    name: 'dailyPlaner',
    initialState,
    reducers: {
        showAll:(state,action)=>{
            state.all = !state.all
        },

        addTask: (state, action) => {
            console.log(action.payload);
            state.tasks.push({ id: nanoid(), name: action.payload.name, isComplited: false, date: action.payload.date, toggleEdit: false })
        },
        taskIsComplited: (state, action) => {
            state.tasks.map(task => {
                if (task.id === action.payload) return task.isComplited = !task.isComplited
                return task
            })
        },

        changeToggle: (state, action) => {
            state.tasks.map(task => {
                if (task.id === action.payload) return task.toggleEdit = !task.toggleEdit
                return task
            })
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        changeEdit: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    console.log(task);
                    const newTask = { ...task }
                    console.log(newTask);
                    newTask.name = action.payload.name
                    newTask.date = action.payload.date
                    newTask.toggleEdit = !task.toggleEdit
                    return newTask
                }
                return task
            })
        }

    }
})

export const {
    addTask,
    changeToggle,
    changeEdit,
    taskIsComplited,
    deleteTask,
    showAll
} = dailySlice.actions
export default dailySlice.reducer