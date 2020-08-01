import React from 'react';
import Cube from '../CubeComponent';
import CubeThree from "../CubeThreeComponent";
import {Link} from "react-router-dom";

export const SecondLayer = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className="col-12">Solving Second Layer</h2>
                    <div className='col-12'>
                        <hr/>
                    </div>
                    <p className='col-12'>
                        You have successfully completed first part of the tutorial. Let's keep on track and learn
                        how to solve the second layer of the cube.
                    </p>
                    <p className='col-12'>
                        First thing to do now is to keep the solved face on the bottom. So, white will be the bottom
                        face and yellow will be the top.
                    </p>
                    <p className='col-12'>
                        The cube will look something like this now:
                    </p>
                </div>
            </div>
            <Cube cubeId="id1"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 8)[0]}
            />
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12'>Introduction</h3>
                    <p className='col-12'>
                        Until now, the solution was pretty straight forward. But, now we will have to use some
                        algorithms to solve the cube. To solve the second layer, we basically have two cases and
                        thus, two algorithms for this step.
                    </p>
                    <p className='col-12'>
                        In both the cases, the first thing is to find a second
                        layer piece, which is any two faced / edge piece without top face color (yellow in our case)
                        in it. And then place it in such a way that the bottom face color matches the center color.
                        An example for the same is given below.
                    </p>
                </div>
            </div>
            <Cube cubeId="id2"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 9)[0]}
            />
            <div className='container mt-4'>
                <div className='row'>
                    <p className = "col-12">
                        Now, the two cases are as follows.
                        <ol>
                            <li>When the color on top of the piece matches left face.</li>
                            <li>When the color on top of the piece matches right face.</li>
                        </ol>
                    </p>
                    <p className='col-12'>
                        The algorithms for these two cases are provided below to assist you with the task.
                    </p>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <h3 className='col-12'>Algorithms</h3>
                </div>
                <div className='row mt-2'>
                    <h5 className='col-12'>Case 1</h5>
                    <p className='col-12'>
                        When the color on top matches left face.
                    </p>
                </div>

                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>L'</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>L</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>F'</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'second_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 23)[0]}
                                   id='23' height='300px'
                        />
                    </div>
                </div>

                <div className='row mt-2'>
                    <h5 className='col-12'>Case 2</h5>
                    <p className='col-12'>
                        When the color on top matches right face.
                    </p>
                </div>

                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>F'</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>F</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'second_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 24)[0]}
                                   id='24'   height='300px'
                        />
                    </div>
                </div>

                <div className='row mt-2'>
                    <h5 className='col-12'>Special Case</h5>
                    <p className='col-12'>
                        When the piece is in the correct place but the orientation is wrong. Or all pieces are fixed in
                        the wrong places. An example of the latter case is given below.
                    </p>
                    <p className='col-12'>
                        Please ignore the light blue and light red color faces. Their significance is explained later.
                    </p>
                </div>
            </div>
            <Cube cubeId="id3"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 10)[0]}
            />
            <div className='container'>
                <div className='row'>
                    <p className='col-12'>
                        To, solve this case, assume the piece with light blue and light red color, to have blue and red
                        faces. Now, I believe, you understand what to do.
                    </p>
                    <p className='col-12'>
                        Yes, pop out the wrongly oriented piece by applying one of the above algorithms and then again
                        put it in the correct orientation, using one of those algorithms.
                    </p>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <h3 className='col-12'>Final Result</h3>
                    <p className='col-12'>
                        Congratulations, on completing the second layer.<br/>
                        With two layers solved, your cube should like this now.
                    </p>
                </div>
            </div>
            <Cube cubeId="id11"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 11)[0]}
            />
            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/first-layer-corners`}
                    >
                        First Layer: Corners
                    </Link>

                    <Link  onClick = {props.scrollTop}
                           className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                           to={`${props.url}/last-layer`}
                    >
                        Last Layer: Cross
                    </Link>
                </div>
            </div>
        </>
    );
}