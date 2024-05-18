import { useEffect,useState,useRef } from "react"
import { addUser,getUsers } from "./usersSlice"
import {useDispatch,useSelector} from 'react-redux'

const Users =(props)=>{
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users)

    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return(
        <>
        <h2>Users:</h2>
       {
        users.map((user,i)=>{
            return(
                <div key={i}>
                <h2>{user.name}</h2>
                </div>
            )
        })
       }

        </>
    )
}

export default Users