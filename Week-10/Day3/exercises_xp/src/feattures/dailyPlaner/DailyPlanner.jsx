import { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from './Filter'
import All from './All'
import DateAndAdd from './DateAndAdd.jsx'

const DailyPlanner = (props) => {
    const all = useSelector(state => state.dailyReducer.all)

    const [date, setDate] = useState('2024-05-14')



    return (
        <>
            <h1>Daily Planner</h1>
            <input type="date" onChange={(e) => setDate(e.target.value)} defaultValue={'2024-05-14'} />
            
            <DateAndAdd date={date} />

            {all ?
                <All date={date} /> : <Filter date={date} />

            }
        </>
    )
}
export default DailyPlanner