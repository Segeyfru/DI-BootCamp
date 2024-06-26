import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tasksReducer from "../feattures/tasks/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const combineReducersApp = combineReducers({ tasksReducer, })

const store = configureStore({
    reducer: combineReducersApp,
    // reducer:{
    //     tasks: tasksReducer,
    // }
})

export type StoreStateType = ReturnType<typeof store.getState>
export type StoreDispatchType = typeof store.dispatch;

export const useAppDispatch: () => StoreDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector

export default store