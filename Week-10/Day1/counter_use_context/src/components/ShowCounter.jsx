import { useProps, useState, useEffect, useContext } from "react"
import { AppContext } from "../App"
import { DisplayContext } from "./Display"


const ShowCounter = (props) => {
    const { count, name } = useContext(AppContext)

    const { title } = useContext(DisplayContext)


    return (
        <>
            <h2>{title}</h2>
            <h2>ShowCounter</h2>
            <p>{count}</p>
        </>
    )
}
export default ShowCounter