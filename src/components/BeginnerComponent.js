import React, { Component } from 'react';
import { COLORS } from '../shared/colors';
import { Jumbotron } from 'reactstrap';

class Beginner extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS
        }
    }

    render() {
        return(
            <>
                <Jumbotron className="bg-secondary">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 align-self-center">
                                <h1>Rubik's Cube: Beginner's Method</h1>
                                <cite>
                                    It's never too late to learn.
                                </cite>
                                <br/>
                                <p className="float-right">
                                    ~ Malcolm Forbes
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 d-none d-sm-block">
                                <img src="../images/cube-5-nb.png" height="350px" alt="Rubik's Cube" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Beginner;