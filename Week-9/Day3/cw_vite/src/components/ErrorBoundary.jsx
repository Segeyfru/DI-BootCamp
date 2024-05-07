import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError = (error) => {
        return { hasError: true }
    };
    componentDidCatch = (error, errorInfo) => {
        console.log(error);
        // this.setState({hasError:true})
    }

    render() {
        if (this.state.hasError) return this.props.fallback;
        return this.props.children
    }


}

export default ErrorBoundary