import { useState , useEffect} from 'react'

const Test = () => {

    useEffect(()=>{
        return () => alert('I will soon gone')
    },[])

    return (
        <>
            <h2>Contact Form</h2>
            <form>
                <input type="email" placeholder='email' />
            </form>
        </>)
}

export default Test