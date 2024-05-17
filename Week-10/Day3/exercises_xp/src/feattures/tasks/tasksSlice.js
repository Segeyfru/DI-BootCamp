
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        { id: 1, name: 'doit', isComplited: false, toggleEdit: false },
    ]
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state.tasks);
            state.tasks.push({ id: nanoid(), name: action.payload.name, isComplited: false, toggleEdit: false })
        },
        addTaskPrepare: {
            reducer(state, action) {
                console.log(action.payload);
                state.tasks.push(action.payload)
            },
            prepare(name) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        isComplited: false,
                        toggleEdit: false,
                    }
                }
            }
        },
        deleteTask:(state,action)=>{
            console.log(action.payload);
            console.log(state.tasks);
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            // state.tasks.splice(action.payload,1)
        },
        isComplited:(state,action)=>{
            state.tasks.map(task =>{
                if(task.id === action.payload) return task.isComplited = !task.isComplited
                return task
            })
        }
    }
})

export const {
    addTask,
    addTaskPrepare,
    deleteTask,
    isComplited,
} = tasksSlice.actions;

export default tasksSlice.reducer;