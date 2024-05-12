import { useContext } from "react"
import { CreateTodoContext } from "../App"

const CreateTodo = () => {

    const { todos, setTodos } = useContext(CreateTodoContext)


    const addTodo = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const newTodos = [...todos, { id: todos[todos.length - 1].id + 1, name }]
        setTodos(newTodos);
        console.log(todos);
        e.target.name.value = ''
    }

    const deleteTodo = (e, i) => {
        console.log(todos);
        todos.splice(i,1)
        setTodos([...todos])

    }

    return (
        <>
            <form action="" onSubmit={(e) => addTodo(e)}>
                <input type="text" placeholder="Your todo..." name="name" />
                <input type="submit" value="Add" />
            </form>
            {todos.map((item, i) => {
                return <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div><h3>{item.name}</h3></div>
                    <div><button onClick={(e) => deleteTodo(e, i)}>delete</button></div>
                </div>
            })}
        </>
    )
}

export default CreateTodo