import { useTasks } from "./hooks"
import { nanoid } from "@reduxjs/toolkit"
import TasksItem from "./TasksItem"

const TaksList = () => {
    const tasks = useTasks();


    return (
        <>
            {
                tasks.map(item => (
                    <TasksItem key={nanoid()} task={item} />
                ))
            }

        </>
    )
}
export default TaksList