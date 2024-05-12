import { createContext, useState, useContext } from "react"
import { DisplayContext } from "./Display"

const Title = ()=>{
const {title, setTitle} = useContext(DisplayContext)

    return(
        <>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        </>
    )
}
export default Title