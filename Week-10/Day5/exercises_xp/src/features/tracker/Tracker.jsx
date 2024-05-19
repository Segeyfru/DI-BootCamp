import { useTasksSelector, useCategorySelector, useCompletedSelector } from "./trackerHooks"
import { useDispatch } from 'react-redux'
import { useState, useRef } from "react"
import { addTaskPrepare, deleteTask, saveChanges, changeToggleEdit, compliteTask } from "./trackerSlice"


const Tracker = (props) => {
    const tasks = useTasksSelector()
    const dispatch = useDispatch()
    const [selector, setSelector] = useState('all')
    const [category, setCategory] = useState('')
    const complited = useCompletedSelector()
    const categoryList = useCategorySelector()

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
    console.log(categoryList);
    const saveTask = (e, id) => {
        e.preventDefault();
        console.log(e.target.name.value, e.target.category.value);
        dispatch(saveChanges({ id, name: e.target.name.value, category: e.target.category.value }))
    }

    const changeTask = (task) => {
        return (
            <div key={task.id} className="task">
                <form onSubmit={(event) => saveTask(event, task.id)}>
                    <input type="text" name="name" defaultValue={task.name} />
                    <input type="text" name="category" defaultValue={task.category} />
                    <input type="submit" />
                </form>
                <div>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </div>
            </div>
        )
    }

    const selectSelector = () => {
        if (selector === 'all') {
            return (
                <>
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
        if (selector === 'complited') {
            return (
                <>
                    {
                        complited.map(task => {
                            return (
                                task.toggleEdit ? changeTask(task) : showTask(task)
                            )
                        })
                    }
                </>
            )
        }
        if (selector === 'category') {
            return (
                <>
                    {
                        <>
                        <select onChange={(e) => setCategory(e.target.value)}>
                                <option value="">select category</option>
                                {
                                    categoryList.map((item, i) => {
                                        console.log(item);
                                        return <option value={item} key={i}>{item}</option>
                                    })
                                }
                            </select>
                            {/* <button onClick={(e)=>setCategory(categoryRef.current.value)}>Search</button> */}
                        </>
                }
                        {
                            tasks.filter(task => task.category === category).map(task => {
                                return (
                                    task.toggleEdit ? changeTask(task) : showTask(task)
                                )
                            })
                        }
                    </>
            )
        }
    }


                    return (
                    <>
                        <h2>Tracker</h2>
                        <form onSubmit={(e) => { newTask(e) }}>
                            <input type="text" name="name" placeholder="Your task..." />
                            <input type="text" name="category" placeholder="Your category..." />
                            <input type="submit" />
                        </form>
                        <button onClick={() => setSelector('category')}>By Category</button>
                        <button onClick={() => setSelector('complited')}>Complited</button>
                        <button onClick={() => setSelector('all')}>All</button><br />
                        {selectSelector()}

                        {/* {
                tasks.map(task => {
                    return (
                        task.toggleEdit ? changeTask(task) : showTask(task)
                    )
                })
            } */}

                    </>
                    )
}

                    export default Tracker