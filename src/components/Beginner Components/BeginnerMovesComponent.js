import React, { Component } from 'react';
import { CUBE_DATA } from '../../shared/cubeData';
import CubeThree from '../CubeThreeComponent';

class Moves extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cubeData: CUBE_DATA
        }
    }

    render() {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <h2 className="col-12">Basic Moves</h2>
                        <p className='col-12'>
                            There are some basic or atomic moves in cubing world. These are the moves which
                            are combined together to form all the algorithms required to solve the cube.
                            (Don't worry there are not much of them in this tutorial).
                        </p>
                        <p className='col-12'>
                            Each of these moves is defined as (this is just my definition): 
                            <em>The face rotated 90&deg; clockwise when it is treated as the front face.</em>
                            &nbsp;Don't worry if this definition seems tough, all the moves are explained below!
                        </p>
                        <p className='col-12'>
                            These are the basic moves requierd for this tutorial:
                        </p>
                    </div>
                    <div className='row'>
                        <h5 className='col-12'>Front (F)</h5>
                        <p className='col-12'>
                            The front move, denoted by <strong>F</strong>, is when Front face is rotated
                            clockwise 90&deg;. I know, this is the same tough definition as above. See below:
                        </p>
                    </div>
                    <div className='row align-self-center'>
                        <p className='col-12 col-md-6 align-self-center'>
                            To understand you can look at the adjacent visualization:
                        </p>
                        <div className='col-12 col-md-6'>
                            <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 2)[0]}
                                id='2' height='300px' />
                        </div>
                    </div>

                    <div className='row'>
                        <h5 className='col-12'>Right (R)</h5>
                        <p className='col-12'>
                            The right move, denoted by <strong>R</strong>, is just 90&deg; rotation
                            of right face, when treated as front.
                        </p>
                    </div>
                    <div className='row align-self-center'>
                        <p className='col-12 col-md-6 align-self-center'>
                            The <strong>R</strong> is like this:<br/>
                            I hope you have realized it by now, if not, you can drag and rotate all the moving cubes.
                            So, if you drag and make right face as front, you will notice <strong>R</strong> move looking
                            just like <strong>F</strong>.
                        </p>
                        <div className='col-12 col-md-6'>
                            <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 4)[0]}
                                id='4' height='300px' />
                        </div>
                    </div>

                    <div className='row'>
                        <h5 className='col-12'>Left (L)</h5>
                        <p className='col-12'>
                            The left move is denoted by <strong>L</strong>. As always, the definition is same again, so let's
                            skip to the visualization part.
                        </p>
                    </div>
                    <div className='row align-self-center'>
                        <p className='col-12 col-md-6 align-self-center'>
                            The <strong>L</strong> move is like this:<br/>
                            You may again note the resemblance between <strong>L</strong> and <strong>F</strong>
                        </p>
                        <div className='col-12 col-md-6'>
                            <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 6)[0]}
                                id='6' height='300px' />
                        </div>
                    </div>

                    <div className='row'>
                        <h5 className='col-12'>Top (U)</h5>
                        <p className='col-12'>
                            The top move is denoted by <strong>U</strong>.
                        </p>
                    </div>
                    <div className='row align-self-center'>
                        <p className='col-12 col-md-6 align-self-center'>
                            The <strong>U</strong> move is like this:<br/>
                            This has a resemblance with <strong>F</strong>
                        </p>
                        <div className='col-12 col-md-6'>
                            <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 8)[0]}
                                id='8' height='300px' />
                        </div>
                    </div>

                    <div className='row'>
                        <h5 className='col-12'>Bottom (D)</h5>
                        <p className='col-12'>
                            The bottom or down move is denoted by <strong>D</strong>.
                        </p>
                    </div>
                    <div className='row align-self-center'>
                        <p className='col-12 col-md-6 align-self-center'>
                            The <strong>D</strong> move is like this:<br/>
                            This has a resemblance with <strong>F</strong>
                        </p>
                        <div className='col-12 col-md-6'>
                            <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 10)[0]}
                                id='10' height='300px' />
                        </div>
                    </div>

                    <div className='row'>
                        <h5 className='col-12'>Back (B)</h5>
                        <p className='col-12'>
                            The back move is denoted by <strong>B</strong>.
                        </p>
                    </div>
                    <div className='row align-self-center'>
                        <p className='col-12 col-md-6 align-self-center'>
                            The <strong>B</strong> move is like this:<br/>
                            This has a resemblance with <strong>F</strong>. In the first look, it might look
                             that this move is opposite of <strong>F</strong>, but if you visualize back face as front,
                             you will surely see the similarity.
                        </p>
                        <div className='col-12 col-md-6'>
                            <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 12)[0]}
                                id='12' height='300px' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Moves;