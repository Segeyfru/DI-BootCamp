import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, changeToggle, taskIsComplited, deleteTask, changeEdit ,showAll} from './dailySlice';
import Filter from './Filter'
import All from './All'
import DateAndAdd from './DateAndAdd.jsx'

const DailyPlanner = (props) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.dailyReducer.tasks)
    const all = useSelector(state => state.dailyReducer.all)

    const [date, setDate] = useState('2024-05-14')

    const saveEdit = (e, id) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.date.value);

        dispatch(changeEdit({ name: e.target.name.value, date: e.target.date.value, id }))


    }
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
            <h1>Daily Planner</h1>
            <input type="date" onChange={(e) => setDate(e.target.value)} defaultValue={'2024-05-14'} />
<DateAndAdd date={date}/>
            
            { all ? 
            <All date={date} /> :                <Filter date={date}  />
                
            }
        </>
    )
}
export default DailyPlanner