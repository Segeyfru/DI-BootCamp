import { createContext, useState } from "react"
import ShowCounter from "./ShowCounter"
import Title from "./Title.jsx"

export const DisplayContext = createContext()

const Display = (props) => {
    const [title,setTitle] = useState('Bla Bla Bla')


    return (
        <>
            <h2>Display</h2>
            <DisplayContext.Provider value={{title,setTitle}}>
                <ShowCounter />
                <Title />
            </DisplayContext.Provider>
        </>
    )
}

export default Display