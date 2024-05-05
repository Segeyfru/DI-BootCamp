import React from "react"

const Hello = (props) =>{
    console.log(props);
    const {name,email} = props
    return (
        <React.Fragment>
        <h1>Hello {name}</h1>
        <h2>Welcome to React</h2>
        <p>{props.email}</p>
        </React.Fragment>
    )
}

export default Hello