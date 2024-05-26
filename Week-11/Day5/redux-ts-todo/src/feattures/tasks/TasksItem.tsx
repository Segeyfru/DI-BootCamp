
import { Item } from "../../model/ListItem"
import TaskEdit from "./TaskEdit"
import TaskRemove from "./TaskRemove"
import { useCheckTask } from "./hooks"

type TasksItemProps = {
    task: Item,
}

const TasksItem = ({ task }: TasksItemProps) => {
    const check = useCheckTask();
    const handelClick = () => {
        check(task.id)
    }
    return (
        <>
            <div>
                {
                    task.edit ? null : <span className={task.checked ? 'complited' : ''} onClick={handelClick}>{task.item}</span>
                }
                <TaskEdit task={task} />
                <TaskRemove id={task.id} />
            </div>
        </>
    )
}
export default TasksItem