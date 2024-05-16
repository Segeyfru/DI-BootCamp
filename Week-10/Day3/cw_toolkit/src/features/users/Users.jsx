import { fetchUsers } from "./UsersSlice"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,useRef } from "react";
import { adduser,addUserPrepare } from "./UsersSlice";

const Users = (props) => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer.users)
    const status = useSelector((state) => state.usersReducer.status)
    const userNameRef = useRef();
    const userSecondRef = useRef();

    const shaffle = () => {
        const red = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        return `rgb(${red},${green},${blue})`
    }
    console.log(users);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (status === 'loadding') return (<h2>Loading</h2>)
    if (status === 'failed') return (<h2>Something went wrong</h2>)
    return (
        <>
        <div>
            <input type="text" ref={userNameRef}/>
            <input type="text" ref={userSecondRef}/>
            <button onClick={()=>dispatch(addUserPrepare(userNameRef.current?.value,userSecondRef.current?.value))}>add</button>
        </div>
            <div className="robots">

                {
                    users.map(user => {
                        return (
                            <div key={user.id} className="robot" style={{ backgroundColor: shaffle() }}>

                                <h2>{user.name}</h2>
                                <h3>{user.username}</h3>
                                <h3></h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users