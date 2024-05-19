import { useTasksSelector } from "./trackerHooks"
import { useDispatch } from 'react-redux'
import { addTaskPrepare, deleteTask, saveChanges, changeToggleEdit, compliteTask } from "./trackerSlice"


const Tracker = (props) => {
    const tasks = useTasksSelector()
    const dispatch = useDispatch()

    const newTask = (e) => {
        e.preventDefault()
        dispatch(addTaskPrepare(e.target.name.value, e.target.category.value))
    }

    const showTask = (task) => {
        return (
            <div key={task.id} className={task.isComplited ? 'task complited' : 'task'}>
                <div className="task1">
                    <h2 onClick={() => dispatch(compliteTask(task.id))}> {task.name}</h2>
                    <p>{task.category}</p>
                </div>
                <div>
                    <button onClick={() => dispatch(changeToggleEdit(task.id))}>Edit</button>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </div>
            </div>
        )
    }

    
    const changeTask = (task) => {
        return (
            <div key={task.id} className="task">
                <form onSubmit={(e) => saveChanges(e, task.id)}>
                    <input type="text" name="name" defaultValue={task.name} />
                    <input type="text" name="category" defaultValue={task.category} />
                    <input type="submit"/>
                </form>
                <div>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </div>
            </div>
        )
    }
    const saveChanges = (e, id) => {
        e.preventDefault();
        console.log(e.target.name.value, e.target.category.value);
        dispatch(saveChanges({ id, name: e.target.name.value, category: e.target.category.value }))
    }
    
    return (
        <>
            <h2>Tracker</h2>
            <form onSubmit={(e) => { newTask(e) }}>
                <input type="text" name="name" />
                <input type="text" name="category" />
                <input type="submit" />
            </form>
            {
                tasks.map(task => {
                    return (
                        task.toggleEdit ? changeTask(task) : showTask(task)
                    )
                })
            }
        </>
    )
}

export default Tracker