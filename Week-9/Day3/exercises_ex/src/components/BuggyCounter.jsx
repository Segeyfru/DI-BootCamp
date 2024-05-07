import React from "react";

class BuggyCounter extends React.Component {

    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }


    render(){
        return this.props.children
    }
}

export default BuggyCounter