import { useContext } from "react"
import { ChangeContext } from "../App"



const ThemeContext = () => {

    const { light } = useContext(ChangeContext)

    return (
        <>
            <div className={light.toLowerCase()}>
                <h2>ThemeContext</h2>
            </div>
        </>
    )
}

export default ThemeContext