import { createSlice, nanoid } from '@reduxjs/toolkit'
import { act } from 'react'
// import {  } from 'redux'

const initialState = {
    tasks: [
        { id: 1, name: "DoIt", category: 'DI', isComplited: false, toggleEdit: false, },
        { id: 2, name: "NotDoIt", category: 'home', isComplited: false, toggleEdit: false, }
    ],
    category:['DI','home']
    // category:[{cat:'DI'},{cat:'home'}]
}

export const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        
        addTaskPrepare: {
            reducer(state, action) {
                state.tasks.push(action.payload)
                if(!state.category.includes(action.payload.category)){
                    state.category.push(action.payload.category)
                }
            },
            prepare(name, category) {
                return {
                    payload: { id: nanoid(), name, category, isComplited: false, toggleEdit: false, }
                }
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        compliteTask: (state, action) => {
            const updatedTask = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return { ...task, isComplited: !task.isComplited }
                }
                return task
            })
            console.log(updatedTask);
            state.tasks = updatedTask
        },

        saveChanges: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    console.log(task.id);
                    console.log(action.payload.id);
                    const newTask = { ...task }
                    console.log(newTask);
                    newTask.name = action.payload.name
                    newTask.category = action.payload.category
                    newTask.toggleEdit = !newTask.toggleEdit
                    return newTask
                }
                return task
            })

        },

        changeToggleEdit: (state, action) => {
            const updatedTask = state.tasks.map(task => {
                if (task.id === action.payload) {
                    console.log(task);
                    return { ...task, toggleEdit: !task.toggleEdit }
                }
                return task
            })
            console.log(updatedTask);
            state.tasks = updatedTask
        },
    }

})

export const state = (state) => state.trackerReducer

export const {
    addTaskPrepare,
    deleteTask,
    saveChanges,
    changeToggleEdit,
    compliteTask
} = trackerSlice.actions

export default trackerSlice.reducer