import React, { Component } from 'react'

class SafeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error cought by SafeComponent', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>Somthing went wrong.</div>
            )
        }

        return this.props.children;
    }
}

export default SafeComponent