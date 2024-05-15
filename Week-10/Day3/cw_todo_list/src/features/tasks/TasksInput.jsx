import { useState, useEffect, useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { ADD_TASK, DELETE_TASK, COMPLITE_TASK } from "./taskReducers";

const TasksInput = (props) => {
    const tasks = useSelector((state) => state.taskReducer.tasks)
    const dispatch = useDispatch();
const addRef = useRef('');
    const addTask = () => {
        if (addRef.current.value.trim() === '') { return };
        dispatch({ type: ADD_TASK, payload: addRef.current.value });
        addRef.current.value = ''
    }

    return (
        <>
            <div>
                <input ref={addRef} placeholder="Add new task..." />
                <button onClick={() => addTask()}>Add task</button>
            </div>
        </>
    )
}
export default TasksInput