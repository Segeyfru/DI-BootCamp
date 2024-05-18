import { ageDownAsync, ageDownAsyncRej, ageUpAsync } from "./counterSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

const AgeCounter = (props) => {

    const dispatch = useDispatch();
    const age = useSelector(state => state.counterReducer.count)
    const status = useSelector(state => state.counterReducer.status)
    return (
        <>
            <h2>Counter</h2>
            {
                status !== 'successfully' ? <h2>{status}</h2> : <h2>{age}</h2>
            }

            <div></div>
            <button onClick={() => dispatch(ageUpAsync())}>Up</button>
            <button onClick={() => dispatch(ageDownAsync())}>Down</button>
            <button onClick={() => dispatch(ageDownAsyncRej())}>DownRej</button>
        </>
    )
}

export default AgeCounter