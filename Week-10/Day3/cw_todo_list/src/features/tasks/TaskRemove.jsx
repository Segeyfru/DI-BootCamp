import { useSelector,useDispatch } from "react-redux";
import { DELETE_TASK, } from "./taskReducers";

const TaskRemove = (props)=>{

    const tasks = useSelector((state) => state.taskReducer.tasks)
    const dispatch = useDispatch();

    const removeTask =()=>{
        dispatch({type:DELETE_TASK,id:props.id})
    }

    return(
        <>
        <button onClick={()=>removeTask()}>Delete</button>
        </>
    )
}
export default TaskRemove