import { v4 as uuidv4 } from 'uuid';
export const ADD_TASK = 'add_task'
export const COMPLITE_TASK = 'complite_task'
export const DELETE_TASK = 'delete_task'

const initialState = {
    tasks: [],
    users: [],

}
export const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:

            const newTasks = [...state.tasks];
            newTasks.push({ id: uuidv4(), task: action.payload, isComplited: false })

            return { ...state, tasks: newTasks }

        case COMPLITE_TASK:
            const newTask = state.tasks.map(item => {
                return item.id === action.id
                    ? { ...item, isComplited: !item.isComplited }
                    : item;
            });
            return { ...state, tasks: newTask }

        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) }


        default:
            return state;
    }
}
