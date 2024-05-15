import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TASK, DELETE_TASK, COMPLITE_TASK } from "./taskReducers";
import './tasks.css'
import TasksTitle from "./TasksTitle";
import TasksInput from "./TasksInput";
import TaskRemove from "./TaskRemove";

const TasksList = (props) => {
    const [filter, setFilter] = useState('all')
    const tasks = useSelector((state) => state.taskReducer.tasks)
    const dispatch = useDispatch();
    console.log(tasks);



    const taskComplited = (id) => {
        dispatch({ type: COMPLITE_TASK, id, })
    }

    const filterTasks = tasks.filter(task => {
        if (filter === 'complited') return task.isComplited;
        else if (filter === 'active') return !task.isComplited;
        return task
    })

    return (
        <>
            <TasksTitle />
            <TasksInput />
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('complited')}>Complited</button>
                <button onClick={() => setFilter('active')}>Active</button>
            </div>
            {
                filterTasks.map(item => {
                    return <div key={item.id}>
                        <span
                            className={item.isComplited ? "complited" : ""}
                            onClick={() => taskComplited(item.id)}
                        >
                            {item.task}
                        </span>
                        <TaskRemove id={item.id} />
                    </div>
                })
            }
        </>
    )
}
export default TasksList