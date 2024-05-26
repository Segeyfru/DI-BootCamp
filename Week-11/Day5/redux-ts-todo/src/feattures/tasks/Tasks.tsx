import TasksTitle from "./TasksTitle"
import TaksList from "./TaksList"
import TasksInput from "./TasksInput"
import TasksFilterButton from "./TasksFilterButton.tsx"

import { useTasks } from "./hooks.ts"

const Tasks =()=>{

    const tasks = useTasks();
    console.log(tasks);
    
    return(
        <>
        <h2>Tasks</h2>
        <TasksTitle taskCount={tasks.length} />
        <TasksFilterButton />
        <TasksInput/>
        <TaksList />
        </>
    )
}

export default Tasks