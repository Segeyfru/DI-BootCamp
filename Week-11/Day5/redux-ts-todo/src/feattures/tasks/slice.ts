import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import ListItem from "../../model/ListItem";
import { StoreStateType } from "../../app/store";

export type ActiveState = 'all' | 'active' | 'complited'

export enum EnumActiveState {
    All,
    Active,
    Complited,
}
export type InitialState = {
    tasks: ListItem[];
    filter: EnumActiveState;
}
const initialState: InitialState = {
    tasks: [],
    filter: EnumActiveState.All
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const task: ListItem = new ListItem(nanoid(), action.payload)
            state.tasks.push(task.serialize() as ListItem)
        },
        remove: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(item => item.id !== action.payload)
        },
        check: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((item) => item.id === action.payload)
            if (task) {
                task.checked = !task.checked
            }
        },
        clear: (state) => {
            state.tasks = []
        },
        active: (state, action: PayloadAction<EnumActiveState>) => {
            state.filter = action.payload;
        },
        edit:(state, action: PayloadAction<string>)=>{
            const task = state.tasks.find((item) => item.id === action.payload)
            if (task) {
                task.edit = !task.edit
            }
        },
        changeTask:(state,action)=>{
            
            const task = state.tasks.find((item) => item.id === action.payload.id)
            if (task) {
                task.item = action.payload.item
                task.edit = !task.edit
            }
        }
    }
},
)

export const tasksState = (state: StoreStateType) => state.tasksReducer.tasks
export const filterState = (state: StoreStateType) => state.tasksReducer.filter

export const { add, remove, clear, check, active,edit,changeTask } = tasksSlice.actions

export default tasksSlice.reducer