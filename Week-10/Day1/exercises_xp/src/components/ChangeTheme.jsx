import { useContext } from "react"
import { ChangeContext } from "../App"

const ChangeTheme = () => {
    const { light, setLight } = useContext(ChangeContext)

    const changeTheme = () => {
        if (light === 'Light'){
            setLight('Dark')
        }else{
            setLight('Light')
        }
    }

    return (
        <>
            <button onClick={changeTheme}>{light }</button>
        </>
    )
}

export default ChangeTheme