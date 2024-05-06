import React from "react"
import Hello from "./Hello";
class HelloClass extends React.Component {
    constructor(){
        console.log('constructor');
        super();
        this.state = {
            name:'John',
            title: 'Welcome to JS class',
        }
    }

    changeName = () =>{
        this.setState({name:'Dan', email: 'jjj@mail.com', title: 'Welcome to React class'})
        console.log(this.state.name);
    }

    handleChange = (e) =>{
        this.setState({name: e.target.value});
    }
    render(){
        console.log('render');
        return(
            <>
                <h2>Hello, {this.state.name}, from {this.props.title}</h2>
                <p>Email: {this.state.email} </p>
                <input onChange={(e) => this.handleChange(e)}></input> {/** Have to use call back functiom! */}
                <button onClick={this.changeName}>Click me</button>
                <Hello title={this.state.title} />
            </>
        )
    }
}

export default HelloClass