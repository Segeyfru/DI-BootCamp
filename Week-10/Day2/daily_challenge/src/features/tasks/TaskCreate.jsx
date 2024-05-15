import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TASK, DELETE_TASK, COMPLITED_TASK } from "./tasksReducers";

const TaskCreate = (props) => {

    const tasks = useSelector(state => state.reducer.tasks)
    const dispatch = useDispatch();


    const createTask = (e) => {
        e.preventDefault()
        // console.log(date, e.target.name.value);

        dispatch({ type: ADD_TASK, date:props.date, name: e.target.name.value })
        console.log(tasks);
        e.target.name.value =''
    }

    return (
        <>
            <form  onSubmit={(e) => createTask(e)}>
                <input type="date" name="" id="" onChange={(e) => props.setDate(e.target.value)} />
                <input type="text" name="name" placeholder="Task..." />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default TaskCreate