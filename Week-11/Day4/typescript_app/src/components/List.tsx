import { ReactNode } from "react"

interface ListProps<T>{
    // items:(string|number)[]
    items:T[]
}

// function List <T>({items}:ListProps<T>){
const List =<T,>({items}:ListProps<T>)=>{
    return(
        <>
        <h2>My list</h2>

        {
            items.map((item,i)=>{
               return (<li key={i}>{item as ReactNode}</li>)
            })
        }
        </>
    )
}

export default List