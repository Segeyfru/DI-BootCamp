import { ReactNode } from "react"

interface CounterProps{
    setCount:React.Dispatch<React.SetStateAction<number>>
    // count:number
    children:ReactNode
}

const Counter = ({children,setCount,}:CounterProps) => {
    return (
        <>
            <h2>Counter</h2>
            <div>{children}</div>
            <button onClick={() => setCount((count)=>(count - 1))}>-</button>
            <button onClick={() => setCount((count)=>(count + 1))}>+</button>
        </>
    )
}
export default Counter