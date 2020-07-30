import React from 'react';
import Cube from '../CubeComponent';
import CubeThree from "../CubeThreeComponent";
import {Link} from "react-router-dom";

export const LastCross = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='col-12'>Solving Last Layer</h2>
                    <p className='col-12'>
                        Welcome to the final step of solving a cube. This part is a little more complex than previous
                        ones, because you have to find your way forward without destroying the previously solved layers.
                        But, no worries, I have some steps and algorithms to help you with this.
                    </p>
                    <p className='col-12'>
                        The solution is last layer is divided into 4 parts:
                    </p>
                    <ol className='col-12'>
                        <li>
                            <strong>The Yellow Cross: </strong>In this step, we will solve the yellow cross on the
                            top-most layer.
                        </li>
                        <li>
                            <strong>Yellow Edges: </strong>We have to correctly orient the yellow cross in this step.
                            Remember, the correct orientation for a cross from the first layer.
                        </li>
                        <li>
                            <strong>Yellow Corners: </strong>This step is to develop the corners for the final
                            step.
                        </li>
                        <li>
                            <strong>Orient Yellow Corners: </strong>In this step, we orient the yellow corners correctly
                            and thus, complete the solution for our cube.
                        </li>
                    </ol>
                </div>

                <div className='row mt-2'>
                    <div className='col-12 mb-2'>
                        <hr />
                    </div>
                    <h2 className='col-12'>The Yellow Cross:</h2>
                    <div className='col-12'>
                        <p>
                            Let's start solving the last layer. In this step, we are going to create a yellow cross
                            on the top layer, without keeping orientation in mind. We will orient the yellow edges
                            correctly in the next step.
                        </p>
                        <p>
                            To complete this step, we only have three cases and only one algorithm, let's look it in
                            action.
                        </p>
                    </div>
                    <div className='col-12 mb-1'>
                        <h3>Algorithms</h3>
                    </div>
                    <div className='col-12'>
                        <h5>Case 1</h5>
                        <p>
                            This is the case when we only have one yellow piece on the top face. Yes, you guesses it
                            correctly, it is the center piece.
                        </p>
                        <p>
                            <strong>Note:</strong> We ignore all the corner pieces on the top layer in this step.
                        </p>
                    </div>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>F'</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'final_layer_cross'
                                   cubeData = {props.cubeData.filter((data) => data.id === 25)[0]}
                                   id='25' height='300px'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h5>Case 2</h5>
                        <p>
                            This is the case when there is a <strong>"L"</strong> shape formed on the top face,
                            exactly where the Case 1 leaves us.
                        </p>
                    </div>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>F'</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'final_layer_cross'
                                   cubeData = {props.cubeData.filter((data) => data.id === 26)[0]}
                                   id='26' height='300px'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <h5>Case 3</h5>
                        <p>
                            This is the case when there is a <strong>straight line</strong> on the top face,
                            exactly where the Case 2 leaves us.
                        </p>
                    </div>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>F'</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'final_layer_cross'
                                   cubeData = {props.cubeData.filter((data) => data.id === 27)[0]}
                                   id='27' height='300px'
                        />
                    </div>
                </div>

                <div className='row mt-2 mb-2'>
                    <div className='col-12'>
                        <h3>Final Result</h3>
                        <p>
                            After this step, you should have successfully made a yellow cross on the top face.
                            As said before, we don't care if the other sides match correctly, i.e., if the
                            yellow cross is oriented correctly.
                        </p>
                        <p>
                            After this step, this is the final cube state.
                        </p>
                    </div>
                </div>
            </div>
            <Cube cubeId="id4"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 12)[0]}
            />
            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/second-layer`}
                    >
                        Second Layer
                    </Link>

                    <Link  onClick = {props.scrollTop}
                           className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                           to={`${props.url}/last-layer-edges`}
                    >
                        Last Layer: Edges
                    </Link>
                </div>
            </div>
        </>
    );
}