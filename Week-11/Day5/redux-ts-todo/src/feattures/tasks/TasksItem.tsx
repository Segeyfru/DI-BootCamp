
import { Item } from "../../model/ListItem"
import TaskEdit from "./TaskEdit"
import TaskRemove from "./TaskRemove"
import { useCheckTask,useEditTask } from "./hooks"

type TasksItemProps = {
    task: Item,
}

const TasksItem = ({ task }: TasksItemProps) => {
    const edit = useEditTask();
    const check = useCheckTask();
    const handelClick = () => {
        check(task.id)
    }
    return (
        <>
            {
                task.edit ?
                    <TaskEdit task={task} /> :
                    <div>
                        <span className={task.checked ? 'complited' : ''} onClick={handelClick}>{task.item}</span>
                        <button onClick={() => edit(task.id)}>Edit</button>
                        <TaskRemove id={task.id} />
                    </div>
            }
        </>
    )
}
export default TasksItem