import { addTask, deleteTask, updateTask } from "../redux/actions"
import { connect } from "react-redux"
import { useRef, useState,useEffect } from "react"

const Task = (props) => {
    const yearRef = useRef()
    // const monthRef = useRef()
    const [month,setMonth] = useState(0)
    const [date, setDate] = useState('2024-05-14')
    const [tasks,setTasks] =useState(props.days)
    const dayRef = useRef()

    const newTask = (e) => {
        e.preventDefault()
        console.log(month);

        setDate(`${e.target.year.value}-${month}-${e.target.day.value}`)
        const name = e.target.name.value
        const isComplited = e.target.checkbox.checked
        console.log(name, isComplited ,date);

        props.add({ name, isComplited ,date})
        
        e.target.name.value = ''
        e.target.day.value = ''
        e.target.month.value = ''
        e.target.checkbox.checked = ''

    }

    const changeThisTask = (e, id,isComplited) => {

        
        props.update({ id, isComplited,date })
    }


    const searchDate = (e) => {
        e.preventDefault()
console.log(date);

        setDate(`${e.target.year.value}-${month}-${e.target.day.value}`)
        console.log(date);
        const newList = props.days.filter(day=> day.date == date)
        console.log(newList);
        
        setTasks(newList)
    }

    useEffect(()=>{
        console.log(date);
        console.log(tasks);
    },[date,tasks])


    return (
        <>
            <h2>To-Do List</h2>

            <form action="" onSubmit={(e) => newTask(e)}>
            
                <input type="text" placeholder="Your task..." name="name" />
                <input type="checkbox" name="checkbox" id="" />
                <input type="submit" value="Add" />
            </form>

            {/* {formToChange} */}
            <h2>Tasks by day: {date}</h2>
            <form onSubmit={(e) => searchDate(e)}>


                <label htmlFor="year">Year: </label>
                <input style={{ width: "50px" }} type="number" name="year" defaultValue={2024} />
                <label htmlFor="month"> Month: </label>
                <select id="month" name="month" defaultValue={'05'} onChange={(e) => setMonth(e.target.value)}>
                    <option value="">Select Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                {
                    month == 2 ? <input style={{ width: "50px" }} type="number" name="day" id="" max={29} /> :
                        (month == 1 || month == 3 || month == 5 || month == '05' || month == 7 || month == 8 || month == 10 ||
                            month == 12) ? <input style={{ width: "50px" }} defaultValue={'14'} type="number" name="day" id="" max={31} /> :
                            <input style={{ width: "50px" }} type="number" name="day" id="" max={30} />
                }
                <input type="submit" value="Search" />
            </form>

            {
                tasks[0].tasks.map((item, i) => {
                    console.log(item);
                    return <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "600px" }}>
                        <h2>{item.id}</h2>
                        <h3 style={{ marginRight: '25px' }}>{item.name}</h3>
                        <h3 onClick={(e) => { changeThisTask(e, item.id,item.isComplited) }} style={{ marginRight: 'auto' }}>{item.isComplited ? 'Complited' : 'Not complited'}</h3>

                        <button onClick={() => { props.delete({ id: i }) }}>Delete</button>
                    </div>
                })
            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        days: state.reducer.days,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (val) => dispatch(addTask(val)),
        delete: (id) => dispatch(deleteTask(id)),
        update: (isComplited) => dispatch(updateTask(isComplited))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)

