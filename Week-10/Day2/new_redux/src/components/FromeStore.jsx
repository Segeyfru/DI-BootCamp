import { connect, useDispatch, useSelector } from "react-redux"
import { useRef } from 'react'
import { changeText } from "../redux/actions"

const FromStore = (props) => {


    const text = useSelector((state) => state.exampleReducer.text)
    const dispatch = useDispatch()



    return (
        <>
            <h3>Text = {text}</h3>
            <button onClick={() => dispatch({ type: 'text', payload: 'Changed by button' })}>Change</button>
            <input onChange={(e) => dispatch({ type: 'text', payload: e.target.value })} />
        </>
    )
}
export default FromStore

// const mapStateToProps =(state) =>{
//     return {
//         text: state.exampleReducer.text
//     }
// }
// const mapDispatchToProps =(dispatch)=>{
//     return{
//         changeText:(val)=>dispatch(changeText(val))
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(FromStore)