type TitleProps ={
    taskCount: number
}
const TasksTitle =({taskCount}:TitleProps)=>{
    console.log('TaskTitle Render');
    
    return (
        <>
        <h3>Number of tasks = {taskCount}</h3>
        </>
    )

}
export default TasksTitle