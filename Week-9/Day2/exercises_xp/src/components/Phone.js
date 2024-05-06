// import Events from './Events' 
import { useState } from 'react'
const Phone = (props) => {
    const [brand, setBrand] = useState('Samsung')
    const [model, setModel] = useState('Galaxy S20')
    const [color, setColor] = useState('black')
    const [year, setYear] = useState(2020)

    const changeColor =() =>{
        setColor('blue')           
    }

    return(
        <>
        <h2>My phone is a {brand}</h2>
        <p>It is a {color} {model} from {year}</p>
        <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default Phone