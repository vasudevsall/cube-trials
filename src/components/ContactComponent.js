import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            formCubeClasses: 'cube-form',
            name: '',
            feedback: '',
            nameErr: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleFormButtonClick(event, 'bottom');
        var submitJson = {
            name: this.state.name,
            feedback: this.state.feedback
        };
        alert('Form Submitted:\n'+JSON.stringify(submitJson));
    }

    handleFormButtonClick(event, toFace) {
        event.preventDefault();
        if(toFace === 'right' && this.state.name.length === 0) {
            this.setState({
                nameErr: 'Please fill in your name'
            });
        }
        else {
            this.setState({
                formCubeClasses: `cube-form cube-${toFace}`
            });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if(name === 'name') {
            this.setState({
                nameErr: ''
            });
        }

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <>
                <Jumbotron className='bg-secondary'>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-md-6 align-self-center'>
                                <h1>Hello!!</h1>
                                <p>
                                    You there?
                                </p>
                            </div>
                            <div className='col-md-6 d-none d-md-block'>
                                <img src={process.env.PUBLIC_URL + "/images/about.png"} height="350px" alt="Cube" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Contact</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <p className='col-12'>
                            This site is designed and developed by <strong><em>Vasu Dev Sall</em></strong>.
                        </p>
                        <p className='col-12'>
                            If you want to contact me, or check my other works, please do visit the following:
                        </p>
                        <div className='col-12'>
                            <a className="btn btn-social btn-github mr-1" href="https://github.com/vasudevsall">
                                <span className="fa fa-github fa-lg"></span> Github
                            </a>
                            <a className="btn btn-social btn-linkedin mr-1" href="https://in.linkedin.com/in/vasu-dev-sall-181b94179">
                                <span className="fa fa-linkedin fa-lg"></span> LinkedIn
                            </a>
                            <a className='btn btn-social btn-bitbucket mr-1' href="https://bitbucket.org/vasudevsall/">
                                <span className="fa fa-bitbucket fa-lg"></span> BitBucket
                            </a>
                            <a className="btn btn-social btn-email mr-1" href="mailto:vasudevsall@gmail.com">
                                <span className="fa fa-envelope-square fa-3x"></span> Mail
                            </a>
                        </div>
                        <div className='col-12'>
                            <hr />
                        </div>
                    </div>
                    <div className='row  no-display-380'>
                        <div className='col-12'>
                            <h3>Feedback Form</h3>
                            <p>
                                While you are here, please take out some time and fill out the form below.
                                This will help a lot to improve this site.
                            </p>
                            <p>
                                <strong>Thank You!</strong>
                            </p>
                        </div>
                    </div>
                    <div className='row  no-display-380'>
                        <div className='col-12 col-md-6'>
                            <div className='scene-form'>
                                <form className={this.state.formCubeClasses} onSubmit={this.handleSubmit}>
                                    <div className='form-front form-face'>
                                        <label className='mb-2 form-label' htmlFor='feedback-name'>
                                            Your Name
                                        </label>
                                        <input value={this.state.name} 
                                            className='mt-3 form-input mb-0' 
                                            type='text'
                                            id='feedback-name'
                                            name='name'
                                            onChange={this.handleChange}
                                            placeholder='Name'
                                            required
                                        />
                                        <label className='err-label'>{this.state.nameErr}</label>
                                        <div className='form-button-div mt-4'>
                                            <button onClick={(e) => {this.handleFormButtonClick(e, 'right')}}
                                                className='btn bg-secondary form-btn-next'>Next&nbsp;
                                                <span className='fa fa-angle-right'></span>
                                            </button> 
                                        </div>
                                    </div>
                                    <div className='form-face form-right'>
                                        <label className='mt-1 mb-2 form-label' htmlFor='feedback-area'>
                                            Feedback
                                        </label>
                                        <textarea rows='3'
                                            className='mt-2 form-input'
                                            id='feedback-area'
                                            name='feedback'
                                            value={this.state.feedback}
                                            onChange={this.handleChange}
                                            placeholder='Feedback'
                                            required
                                        ></textarea>
                                        <div className='form-button-div mt-4'>
                                            <button onClick={(e) => {this.handleFormButtonClick(e, 'front')}}
                                                className='btn bg-secondary form-btn-prev'>
                                                <span className='fa fa-angle-left'></span> Back
                                            </button>
                                            <input className='btn bg-secondary form-btn-next'
                                                type='submit'
                                            />
                                        </div>
                                    </div>
                                    <div className='form-face form-bottom'>
                                        <h3>Thanks a ton!</h3> 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;