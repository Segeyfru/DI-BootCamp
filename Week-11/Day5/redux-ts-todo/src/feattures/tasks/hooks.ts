import {  useCallback } from "react";
import { createSelector } from "@reduxjs/toolkit";
// import { UseDispatch,useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/store";

import {
    add,
    remove,
    clear,
    check,
    active,
    EnumActiveState,
    tasksState,
    filterState,
    edit,
    changeTask
} from "./slice";


export const useTasks = () => {
    return useAppSelector(
        createSelector([tasksState, filterState], (tasks, filter) => {
            switch (filter) {
                case EnumActiveState.Active:
                    return tasks.filter(task => !task.checked);
                case EnumActiveState.Complited:
                    return tasks.filter(task => task.checked);
                default:
                    return tasks;
            }
        })
    )
}


export const useTask = (id: string) => {
    return useAppSelector(
        createSelector([tasksState], (tasks) => {
            tasks.find((task) => task.id === id)
        })
    )
};

// get filter
export const useFilter = () => {
    return useAppSelector(createSelector([filterState], (filter) => filter))
}

// set filter
export const useSetFilter = () => {
    const dispatch = useAppDispatch();
    return useCallback(
        (filter: EnumActiveState) => {
            dispatch(active(filter))
        }, [dispatch]
    )
}

export const useAddTask = () => {
    const dispatch = useAppDispatch();
    return useCallback(
        (task: string) => {
            dispatch(add(task))
        }, [dispatch]
    )
}
export const useChangeTask = () => {
    const dispatch = useAppDispatch();
    return useCallback(
        (item: string,id:string) => {
            dispatch(changeTask({item,id}))
        }, [dispatch]
    )
}
export const useRemoveTask = () => {
    const dispatch = useAppDispatch();
    return useCallback(
        (id: string) => {
            dispatch(remove(id))
        },[dispatch]
    )
}
export const useCheckTask = () => {
    const dispatch = useAppDispatch();
    return useCallback(
        (id: string) => {
            dispatch(check(id))
        }, [dispatch]
    )
}
export const useEditTask = () => {
    const dispatch = useAppDispatch();
    return useCallback(
        (id: string) => {
            dispatch(edit(id))
        },[dispatch]
    )
}
export const useClearTasks = () => {
    const dispatch = useAppDispatch();
    return useCallback(() => {
        dispatch(clear());
    }, [dispatch] )
}

