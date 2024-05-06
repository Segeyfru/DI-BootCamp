import { useState } from 'react'

const Events = (props) => {
    const [isToggleOn, setIsToggleOn] = useState('true')
    const [onOff,setOnOff] = useState('On')

    const clickMe = () => {
        alert('I was clicked')
    }
    const handelKeyDown = (e) => {
        if (e.key === "Enter") {
            alert('The Enter key was pressed, your input is: ' + e.target.value)
        }
    }

    const switchBtn = () =>{
        setIsToggleOn(!isToggleOn)
        if(isToggleOn){
            setOnOff('Off')
        }else{
            setOnOff('On')
        }
    }
    return (
        <>
            <input onKeyDown={(e) => handelKeyDown(e)} placeholder={'Press the ENTER key!'} ></input>
            <br/>
            <button onClick={switchBtn}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    )
    return (<button onClick={clickMe}>Click Me!</button>)
}

export default Events