import { EnumActiveState } from "./slice"
import { nanoid } from "@reduxjs/toolkit"
import { useSetFilter } from "./hooks"
import { memo } from "react"

const TasksFilterButton = () => {
    const setFilter = useSetFilter()
    console.log('Buttons Render');

    
   

    return (
        <>
            
            {
                Object.keys(EnumActiveState)
                .filter((key)=>isNaN(Number(key)))
                .map((key)=>{
                    const enumKey = EnumActiveState[key as keyof typeof EnumActiveState]
                    return (
                        <button key={nanoid()} onClick={() => setFilter(enumKey)}>{key}</button>
                    )
                })
            }
        </>
    )
}
const MemorizedTaskFilterButtot = memo(TasksFilterButton)
export default MemorizedTaskFilterButtot