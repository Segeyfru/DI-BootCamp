import { useDispatch } from "react-redux"
import { randomImages, searchByKeyWord } from './slice.js'
import { useRef } from "react"



const GetRandom = () => {

    const dispatch = useDispatch()
    const inputRef = useRef()


    const getRandomImages = () => {
        dispatch(randomImages())
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: '15px' }}>
                <input type="text" style={{ fontSize: '1.5rem' }} ref={inputRef} onChange={() => dispatch(searchByKeyWord(inputRef.current.value))} />
                <button onClick={getRandomImages}>Random</button>
            </div>

        </>
    )
}

export default GetRandom