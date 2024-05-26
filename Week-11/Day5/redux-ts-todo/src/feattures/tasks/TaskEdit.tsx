import { memo, useRef } from "react"
import { Item } from "../../model/ListItem"
import { useChangeTask, useEditTask } from "./hooks"

type TaskEditProps = {
    task: Item,
    // item:string|null|undefined
}
const TaskEdit = ({ task }: TaskEditProps) => {
    const editHook = useEditTask();
    const changeTaskHook = useChangeTask()
    const inputRef = useRef<HTMLInputElement>(null)

    const changeTask = (id:string) => {
        const task: string = inputRef.current?.value.trim() || '';
        if(task === '') return
        changeTaskHook(task,id)
        // inputRef.current!.value = ""
        
        // editHook(id)
    }
    return (
        <>
            {
                task.edit ? <input type="text" ref={inputRef} defaultValue={task.item} /> : null
            }

            <button onClick={task.edit ? () => changeTask(task.id) : () => editHook(task.id)}>{task.edit ? 'Save' : 'Edit'}</button>
        </>
    )
}
const MemorizedTaskEdit = memo(TaskEdit)
export default MemorizedTaskEdit