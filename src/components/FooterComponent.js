import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1">
                        <h5>Please feel free to travel around!</h5>
                        <ul className="list-unstyled">
                            <li><Link className="footer-link" to="/">Home</Link></li>
                            <li><Link className="footer-link" to="/tutorial">Tutorials</Link></li>
                            <li><Link className="footer-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7">
                        <h5>Designed and Developed By: <strong>Vasu Dev Sall</strong></h5>
                        <h6>Want to contact me?</h6>
                        <div>
                            <a className="btn btn-social-icon btn-github mr-1" href="https://github.com/vasudevsall">
                                <span className="fa fa-github fa-lg"></span>
                            </a>
                            <a className="btn btn-social-icon btn-linkedin mr-1" href="https://in.linkedin.com/in/vasu-dev-sall-181b94179">
                                <span className="fa fa-linkedin fa-lg"></span>
                            </a>
                            <a className='btn btn-social-icon btn-bitbucket mr-1' href="https://bitbucket.org/vasudevsall/">
                                <span className="fa fa-bitbucket fa-lg"></span>
                            </a>
                            <a className="btn btn-social-icon btn-email mr-1" href="mailto:vasudevsall@gmail.com">
                                <span className="fa fa-envelope-square fa-3x"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;