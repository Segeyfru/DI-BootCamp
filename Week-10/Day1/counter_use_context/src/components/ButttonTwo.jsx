
import { useContext } from "react"
import { AppContext } from "../App"
const ButttonTwo = (props) =>{

    const {count, setCount} = useContext(AppContext)
    return (
        <>
        <h3>ButttonTwo</h3>
        <button onClick={()=>setCount(count + 10)}> + 10 </button>
        </>
    )
}

export default ButttonTwo