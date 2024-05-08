import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }

    // static getDerivedStateFromError = (error) => {
    //     return { error: true }
    // };
    componentDidCatch = (error, errorInfo) => {
        this.setState({ hasError: true, error, errorInfo})
        console.log(hasError);
    }


    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h2>An error has occured.</h2>
                    
                </>
            )
        }
        return this.props.children
    }

}

export default ErrorBoundary