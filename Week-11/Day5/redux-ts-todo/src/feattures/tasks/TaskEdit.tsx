import { memo, useRef } from "react"
import { Item } from "../../model/ListItem"
import { useChangeTask} from "./hooks"
import TaskRemove from "./TaskRemove"

type TaskEditProps = {
    task: Item,
    // item:string|null|undefined
}
const TaskEdit = ({ task }: TaskEditProps) => {
    const changeTaskHook = useChangeTask()
    const inputRef = useRef<HTMLInputElement>(null)

    const changeTask = (id: string) => {
        const task: string = inputRef.current?.value.trim() || '';
        if (task === '') return
        changeTaskHook(task, id)
        inputRef.current!.value =''
    }
    return (
        <>
            <div>
                <input className={task.checked ? 'complited' : ''} ref={inputRef} defaultValue={task.item} />
                <button onClick={() => changeTask(task.id)}>Save</button>
                <TaskRemove id={task.id} />
            </div>

        </>
    )
}
const MemorizedTaskEdit = memo(TaskEdit)
export default MemorizedTaskEdit