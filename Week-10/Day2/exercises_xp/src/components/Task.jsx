import { addTask, deleteTask, updateTask } from "../redux/actions"
import { connect } from "react-redux"

const Task = (props) => {
    const newTask = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const isComplited = e.target.checkbox.checked
        console.log(isComplited);
        props.add({ name, isComplited })
        e.target.name.value=''
        e.target.checkbox.checked=''
    }
    const changeThisTask = (e,id) => {

        const isComplited = !props.tasks[id].isComplited
        props.update({id,isComplited})
    }
    

    return (
        <>
            <h2>To-Do List</h2>

            <form action="" onSubmit={(e) => newTask(e)}>
                <input type="text" placeholder="Your task..." name="name" />
                <input type="checkbox" name="checkbox" id="" />
                <input type="submit" value="Add" />
            </form>

{/* {formToChange} */}

            {
                props.tasks.map((item, i) => {
                    return <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "600px" }}>
                        <h3 style={{ marginRight: '25px' }}>{item.name}</h3>
                        <h3 onClick={(e)=>{changeThisTask(e,i)}} style={{ marginRight: 'auto' }}>{item.isComplited ? 'Complited' : 'Not complited'}</h3>
                       
                        <button onClick={()=>{props.delete({id:i})}}>Delete</button>
                    </div>
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.reducer.tasks
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