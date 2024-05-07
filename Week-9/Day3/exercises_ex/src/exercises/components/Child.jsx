import React from 'react'

class Child extends React.Component{
    

    componentWillUnmount(){
        alert('Child was unmounted')
    }

    render(){
        return (
            <header>
                <h2>Hello World</h2>
            </header>
        )
    }
}

export default Child