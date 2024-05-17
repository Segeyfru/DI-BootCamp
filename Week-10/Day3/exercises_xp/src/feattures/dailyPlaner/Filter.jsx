import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, changeToggle, taskIsComplited, deleteTask, changeEdit } from './dailySlice';

const Filter = (props) => {

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.dailyReducer.tasks)

    const date = props.date


    const saveEdit = (e, id) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.date.value);

        dispatch(changeEdit({ name: e.target.name.value, date: e.target.date.value, id }))


    }

    return (
        <>
            {
                tasks.filter(task => task.date === date).map(task => {
                    return (
                        <div key={task.id} className='task' >

                            {
                                task.toggleEdit ? <>
                                    <form onSubmit={(e) => saveEdit(e, task.id)}>
                                        <div className='saveForm'>
                                            <input type="text" name={'name'} defaultValue={task.name} />
                                            <input type="date" name={'date'} defaultValue={task.date} />
                                        </div>
                                        <button type="submit" >Save</button>
                                        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                                    </form>
                                </>
                                    : <>
                                        <h2 onClick={() => dispatch(taskIsComplited(task.id))} className={task.isComplited ? 'complited' : ''}>{task.name}</h2>
                                        <button onClick={() => dispatch(changeToggle(task.id))}>Edit</button>
                                        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                                    </>
                            }
                        </div>
                    )
                })
            }
        </>
    )
}
export default Filter