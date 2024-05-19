import { memo } from "react";


const Todo =({todos,addTask,calculation})=>{
    console.log('todo child render');

    return(
        <>
        <h2>Todo : {calculation}</h2>
        <button onClick={addTask}> add Task</button>
        {
            todos.map((task,i)=>{
                return (
                    <p key={i}> {i} : {task}</p>
                    
                )
            })
        }
        </>
    )
}
export default memo(Todo)