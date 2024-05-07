import { useState, useEffect } from 'react'
const Forms = (props) => {
    const [username, setUsername] = useState('')
    let header
    const [age, setAge] = useState(null)
    const [errormessage, setErrormessage] = useState('')
    const [textarea, setTextarea] = useState(<textarea value={'The content of a texarea goes in the value attribute'}></textarea>)


    const updateName = (e) => {
        if (e.target.value.trim() !== '') {
            setUsername(e.target.value)
        } else {
            setUsername(null)
        }
    }
    const updateAge = (e) => {
        if (!isNaN(e.target.value.trim())) {
            setErrormessage('')
            setAge(e.target.value)
        } else {
            // alert('Your age must be a number')
            setErrormessage(<p>Your age must be a number</p>)
            e.target.value = ''
            setAge(null)

        }
    }
    const mySubmitHandler = (e) => {
        e.preventDefault()
        alert('You are submitting ' + username)
    }

    if (username && age) {
        header = <h2>Hello {username} {age}</h2>
    } else {
        header = null
    }

    return (
        <>
            <header>
                <h2>
                    {header}
                </h2 >
            </header>
            <form onSubmit={(e) => mySubmitHandler(e)}>
                <div>
                    <label htmlFor={'name'} >Enter your name:</label>
                    <br />
                    <input type={'text'} name={'name'} onChange={(e) => updateName(e)}></input>
                </div>

                <div>
                    <label htmlFor={'age'} >Enter your age:</label>
                    <br />
                    <input type={'text'} name={'age'} onChange={(e) => updateAge(e)}></input>
                    <br />{errormessage}
                </div>
                <input type={'submit'} ></input>
            </form>
            {textarea}
            <br/>
            <textarea value={'The content of a texarea goes in the value attribute'}></textarea>

            
        </>
    )
}

export default Forms