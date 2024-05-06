import {useState} from 'react'

const Car =(props)=>{
    const [color,setColor] = useState('red')



    return (
        <header>
            This car is {color} {props.model}
        </header>
    )
}

export default Car