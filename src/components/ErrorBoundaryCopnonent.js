import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMess: ''
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
            errorMess: error.name
        };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <div className='loader-container'>
                        <h1>{this.state.errorMess}</h1>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;