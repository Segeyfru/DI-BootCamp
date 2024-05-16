import { fetchUsers } from "./UsersSlice"
import { useSelector, useDispatch } from 'react-redux'

const Users = (props) => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer.users)
    const pending = useSelector((state) => state.usersReducer.pending)
    console.log(users);

    const shaffle =()=>{
        const red = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        return `rgb(${red},${green},${blue})`
    }


    return (
        <>
            <h2>Users</h2>
            <button onClick={() => dispatch(fetchUsers())}>Find Users</button>

            <div className="robots">
                {
                    users.map(user => {
                        return (
                            <div key={user.id} className="robot" style={{backgroundColor:shaffle()}}>
                                
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