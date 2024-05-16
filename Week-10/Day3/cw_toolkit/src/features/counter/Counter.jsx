import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset,incrementBy, decrementBy ,incrementWIthPrepare,delayIncrementThunk,} from './CounterSlice'
import { useRef } from 'react'

const Counter =(props)=>{
    const count = useSelector((state)=> state.counterReducer.count)
    const count1 = useSelector((state)=> state.counterReducer.count1)
    const dispatch = useDispatch();
    const changeRef = useRef(1)
    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={()=>dispatch(increment(true))}> + </button>
        <button onClick={()=>dispatch(decrement())}> - </button>
        <br />
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <div>
        <button onClick={()=>dispatch(incrementBy({num:changeRef.current.value}))}> + </button>
        <input type="number" ref={changeRef} defaultValue={1} style={{width:'50px'}}/>
        <button onClick={()=>dispatch(decrementBy({num:changeRef.current.value}))}> - </button>
        <br />
        <button onClick={()=>dispatch(incrementWIthPrepare(5,6))}> 5+6 </button>
        </div>
        <div>
        <h2>Count1 = {count1}</h2>
        <button onClick={()=>dispatch(increment(false))}> + </button>
        </div>
        <div>
        <h2>Delay Increment</h2>
        <button onClick={()=>dispatch(delayIncrementThunk())}> + </button>
        </div>

        </>
    )
}

export default Counter