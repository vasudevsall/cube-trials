import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
        this.reloadPage = this.reloadPage.bind(this);
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }

    reloadPage() {
        this.setState({
            hasError: false
        });
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <div className='loader-overlay flex-container'>
                        <div className={'text-center'}>
                            <img src={process.env.PUBLIC_URL + "/images/error.png"} className={'error-img'} alt="Error" />
                            <div className={'error-mess-div'}>
                                <h1 className={'error-mess'}>Oops! Something went wrong!</h1>
                                <h1 className={'error-mess'}>Click here to
                                    <button onClick={this.reloadPage}>Reload</button></h1>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;