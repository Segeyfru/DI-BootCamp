import { ADD, DELETE, UPDATE } from './actions'

const initialState = {
    tasks: []
}


export const exercise_1_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const newtasks = [...state.tasks]
            newtasks.push({ name: action.name, isComplited: action.isComplited })
            return { ...state, tasks: newtasks }
        case DELETE:
            const delTask = [...state.tasks]
            delTask.splice(action.id, 1)
            return { ...state, tasks: delTask }
        case UPDATE:
            const updateTasks = [...state.tasks]
            updateTasks[action.id] = { name:updateTasks[action.id].name ,  isComplited: action.isComplited }
            return { ...state, tasks: updateTasks }
        default:
            return state
    }
}