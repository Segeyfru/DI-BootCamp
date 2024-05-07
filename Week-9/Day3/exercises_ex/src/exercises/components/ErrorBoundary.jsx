import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            errorInfo: false,
        }
    }

    // static getDerivedStateFromError = (error) => {
    //     return { error: true }
    // };
    componentDidCatch = (error, errorInfo) => {
        console.log(errorInfo);
        this.setState({ error, errorInfo })
        // console.log(this.state.error);
    }


    render() {
        if (this.state.error) {
            return (
                <>
                    <p>Something went wrong.</p>
                    <details style={{ whiteSpace: 'pre-wrap', textAlign:"left"}}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </>
            )
        }
        return this.props.children
    }

}

export default ErrorBoundary