import {useDispatch,useSelector} from "react-redux"
import { useRef } from "react"
import { addTaskPrepare,addTask ,deleteTask,isComplited} from "./tasksSlice"

const Tasks =(props)=>{
    const nameRef = useRef('')
    const dispatch = useDispatch();
    const tasks =useSelector(state => state.tasksReducer.tasks)

    const newTask = (name) =>{
        dispatch(addTaskPrepare(name))
        // dispatch(addTask({name}))
        
    }

    return(
        <>
        <h2>Tasks</h2>
        <input type="text" ref={nameRef} />
        <button onClick={()=> newTask(nameRef.current.value)}>Add</button>
        {
            tasks.map((task,i)=>{
                return(
                    <div key={task.id} className="task">
                        <h2 
                        onClick={()=>dispatch(isComplited(task.id))}
                        className= {task.isComplited ? 'complited' : ''}
                        >{task.name}</h2>
                        <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                    </div>
                )
            })
        }
        </>
    )
}

export default Tasks