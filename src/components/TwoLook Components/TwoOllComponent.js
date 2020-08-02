import React from 'react';
import {Link} from 'react-router-dom';
import CubeThree from "../CubeThreeComponent";

export const TwoOLL = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Two Look OLL</h2>
                        <hr/>
                    </div>
                    <div className='col-12'>
                        <p>
                            In this step, we complete the top yellow layer of the cube without caring if the
                            side colors match or not.
                        </p>
                        <p>
                            First thing, to do in Two Look OLL is to make a
                            <Link to={`${props.url}/last-layer`}> yellow cross </Link>
                            on the top layer, which being a beginner method's step has been skipped here,
                            but you can always go back for a refresher.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Advanced Moves</h3>
                        <p>
                            Before going for the algorithms we have to learn some new moves. Let's have a look.
                        </p>
                    </div>
                    <div className='col-12 mt-3'>
                        <h5>Two layers at a time</h5>
                        <p>
                            Turning of two layers at once is marked by lowercase letter of the corresponding face:
                            <strong> f, u, r, b, l, d </strong>. For example, <strong>r</strong> means
                            rotation of right two layers clockwise, and <strong>r'</strong> means rotation of right
                            two layers counter-clockwise
                        </p>
                        <p>
                            Find the animations for r and r' moves below.
                        </p>
                    </div>
                </div>

                <div className='row align-self-center mt-5'>
                    <div className='col-12 col-lg-6 cube-three-margin text-center border-right-lg'>
                        <h5 style={{textDecoration: 'underline'}}>r Move</h5>
                        <CubeThree cubeState = 'normal'
                                   cubeData = {props.cubeData.filter((data) => data.id === 32)[0]}
                                   id='32' height='300px'
                        />
                    </div>
                    <div className='col-12 col-lg-6 cube-three-margin text-center'>
                        <h5 style={{textDecoration: 'underline'}}>r' Move</h5>
                        <CubeThree cubeState = 'normal'
                                   cubeData = {props.cubeData.filter((data) => data.id === 33)[0]}
                                   id='33' height='300px'
                        />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12'>
                        <h3>Whole Cube Reorientation</h3>
                        <p>
                            The entire cube rotations are used in some algorithms. These are rotations of complete cube
                            rather than a single layer or slice. The possible cube reorientations are:
                        </p>
                        <ol>
                            <li>
                                <strong>x -</strong> Rotate the entire cube on R, i.e., do a R move on all the three
                                layers at once.
                            </li>
                            <li>
                                <strong>y -</strong> Rotate the entire cube on U, i.e., do a U move on all the three
                                layers at once.
                            </li>
                            <li>
                                <strong>z -</strong> Rotate the entire cube on F, i.e., do a F move on all the three
                                layers at once.
                            </li>
                        </ol>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12'>
                        <h3>Algorithms</h3>
                        <p>
                            There are 7 algorithms in this step.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}