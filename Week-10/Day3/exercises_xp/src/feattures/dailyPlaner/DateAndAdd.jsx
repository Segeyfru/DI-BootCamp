import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, changeToggle, taskIsComplited, deleteTask, changeEdit ,showAll} from './dailySlice';

const DateAndAdd =(props) =>{
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.dailyReducer.tasks)
    const all = useSelector(state => state.dailyReducer.all)
    const date = props.date

    const addTaskD = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(date);
        dispatch(addTask({ name: e.target.name.value, date }))
        e.target.name.value = ''
        // e.target
    }
    return (
        <>
        <h2>Plans for: {date}</h2>
            <button onClick={()=>dispatch(showAll())}>{all ? 'Show for date' : 'Show All'}</button>
            <form onSubmit={(e) => addTaskD(e)}>
                <input type="text" name='name' />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}
export default DateAndAdd