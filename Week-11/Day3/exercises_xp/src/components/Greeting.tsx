import { useEffect, useState } from "react"

interface GreetingProps {
    name: string
}
interface UsersFetch {
    [key: string | number]: any
}

const Greeting = ({ name }: GreetingProps) => {
    const [users, setUsers] = useState<UsersFetch>([])

    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
    }

    return (
        <>
            <h2>Hello, {name}</h2>

            {
                users.map((user: UsersFetch,i:number)=>{
                    return(
                        <div key={i}>
                            <h2>{user.name}</h2>
                            <h4>{user.email}</h4>
                            <p>{user.address.street}, {user.address.suite}</p>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Greeting