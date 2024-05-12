import { useContext, useRef } from "react"
import { CreateTodoContext } from "../App"

const CreateTodo = () => {

    const { todos, setTodos } = useContext(CreateTodoContext)
    const nameRef = useRef()
    const checkedRef = useRef()


    const addTodo = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const checked = e.target.checkbox.checked
        const newTodos = [...todos, { id: todos[todos.length - 1].id + 1, name, checked }]
        setTodos(newTodos);
        console.log(newTodos);
        e.target.name.value = ''
    }

    const deleteTodo = (e, i) => {
        console.log(todos);
        todos.splice(i, 1)
        setTodos([...todos])

    }
    const chengeEdit = (e, i) => {
        e.preventDefault()

        const updatedArr = [...todos]
        updatedArr[i].edit = !updatedArr[i].edit
        setTodos([...todos])
    }

    const updateTask = (e, i) => {
        e.preventDefault()
        const name = e.target.name.value
        console.log(name);
        const checked = e.target.checkbox.checked
        const newTodos = [...todos]
        newTodos[i] = {name, checked ,edit:false}
        setTodos(newTodos);
        console.log(newTodos);

    }

    return (
        <>
            <form action="" onSubmit={(e) => addTodo(e)}>
                <input type="text" placeholder="Your task..." name="name" />
                <input type="checkbox" name="checkbox" id="" />
                <input type="submit" value="Add" />
            </form>
            {todos.map((item, i) => {
                return <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "600px" }}>
                    <h3 style={{ marginRight: '25px' }}>{item.name}</h3>
                    <h3 style={{ marginRight: 'auto' }}>{item.checked ? 'V' : 'X'}</h3>


                    {
                        item.edit ? <>
                            <form action="" onSubmit={(e)=>{updateTask(e,i)}}>
                                <input type="text" placeholder="Change name..." name="name" defaultValue={item.name}/>
                                Completed
                                <input type="checkbox" name="checkbox" defaultChecked={item.checked} />
                                <input type="submit" value="Save" />
                            </form>
                        </> : <button style={{ marginRight: "10px" }} onClick={(e) => chengeEdit(e, i)}>Change</button>
                    }
                    <div><button onClick={(e) => deleteTodo(e, i)}>Delete</button></div>
                </div>
            })}
        </>
    )
}

export default CreateTodo