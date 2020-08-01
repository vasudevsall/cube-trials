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

export const LastEdges = (props) => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Yellow Edges</h2>
                        <p>
                            In the last step, we successfully made a cross on the top (yellow) layer. But, as you may
                            recall, we have not oriented the last layer correctly. Let's do that in this step.
                        </p>
                    </div>
                    <div className='col-12 mt-2'>
                        <p>
                            This step has two cases and one algorithm to deal with. The cases are based on which pieces
                            are already oriented correctly the adjacent ones or the opposite ones.
                        </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <h3>Algorithms</h3>
                    </div>
                    <div className='col-12 mt-3'>
                        <h5>Case 1</h5>
                        <p>
                            This is the case when two opposite opposite edges are already oriented correctly. To
                            understand better look at the visualization below.
                        </p>
                        <p>
                            One important thing to note is that, one correctly oriented piece should be kept at front
                            and other at back.
                        </p>
                    </div>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>2 U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'final_layer_edges'
                                   cubeData = {props.cubeData.filter((data) => data.id === 28)[0]}
                                   id='28' height='300px'
                        />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <h5>Case 2</h5>
                        <p>
                            This case is when adjacent pieces are oriented correctly, exactly where Case 1 leaves us.
                            Another thing, to keep in mind, one of the oriented piece is to be kept at right and other
                            correctly oriented piece should be kept at back. The apply the following algorithm.
                        </p>
                        <p>
                            I will suggest, to understand better, first observe the initial state of the cube, by
                            rotating and looking at the right and back faces.
                        </p>
                    </div>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>2 U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'final_layer_edges'
                                   cubeData = {props.cubeData.filter((data) => data.id === 29)[0]}
                                   id='29' height='300px'
                        />
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-12'>
                        <h3>Final Result</h3>
                        <p>
                            At, the end of this step, we have correctly oriented all the top cross pieces. Now
                            your cube should like this.
                        </p>
                    </div>
                </div>
            </div>
            <Cube cubeId="id13"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 13)[0]}
            />

            <div className='container mt-2'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/last-layer`}
                    >
                        Last Layer: Cross
                    </Link>

                    <Link  onClick = {props.scrollTop}
                           className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                           to={`${props.url}/last-layer-corners`}
                    >
                        Last Layer: Corners
                    </Link>
                </div>
            </div>
        </>
    );
}

export const LastCorners = (props) => {
    return(
        <>
            <div className='container mb-3'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Yellow Corners</h2>
                    </div>
                    <div className='col-12 mt-2'>
                        <p>
                            Only the last layer corners are left unsolved. First of all, we have to get them at the
                            right spot. Thus, without worrying about the orientation of the corners in this step, we
                            will place all the corners at their correct positions.
                        </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <h3>Steps</h3>
                        <ol>
                            <li>
                                <strong>Keep Cross Oriented: </strong>The first thing to do is to keep your cross
                                oriented.
                            </li>
                            <li>
                                <strong>Find Correctly Placed Corner: </strong>Next, thing to do is to find correctly
                                placed corner, i.e., the corner piece which is between correct three faces,
                                orientation might be wrong. If there is no such piece, then follow next step.
                            </li>
                            <li>
                                <strong>If no piece is found at correct position apply algorithm: </strong> You can
                                skip this step, if you have already found a piece placed correctly. Apply the algorithm
                                <strong> U R U' L' U R' U' L</strong> and find the piece that is placed correctly now.
                            </li>
                            <li>
                                <strong>Keep correctly placed piece at top-right-front place: </strong> You have to
                                keep the correctly placed corner at top-right position on the front face.
                                (Look at the example state below for reference).
                            </li>
                            <li>
                                <strong>Apply Algorithm: </strong> The last step is to apply algorithm
                                <strong> U R U' L' U R' U' L</strong> till all other corner pieces are at their
                                respective positions.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='container mt-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h5>Example State</h5>
                    </div>
                </div>
            </div>
            <Cube cubeId="id14"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 14)[0]}
            />
            <div className='container mt-2'>
                <div className='row'>
                    <div className='col-12'>
                        <p>
                            Here, the corner shown in color is at its correct position, that's why it is placed at
                            top-right-front place.
                        </p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <h3>Algorithm</h3>
                    </div>
                    <div className='col-12 mt-3'>
                        <p>
                            The only algorithm used in this step is <strong>U R U' L' U R' U' L</strong>. What this
                            algorithm is that, is changes positions of all the three corners except the one at the
                            top-right-front position, clockwise. That's why we kept the correctly
                            placed piece at this position.
                        </p>
                    </div>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>L'</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>L</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'normal'
                                   cubeData = {props.cubeData.filter((data) => data.id === 30)[0]}
                                   id='30' height='300px'
                        />
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-12'>
                        <p>
                            In this case, the cube is solved after this algorithm, it might not be the case
                            all the times. Also, sometimes you might have to apply this algorithm more than once.
                        </p>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-12'>
                        <h3>Final Result</h3>
                        <p>
                            At the end of this step, we have correctly placed all the top layer corners.
                        </p>
                        <p>
                            <strong>Note:</strong> this is just one case, the orientation of the pieces in your cases
                            may vary.
                        </p>
                    </div>
                </div>
            </div>
            <Cube cubeId="id15"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 15)[0]}
            />
            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/last-layer-edges`}
                    >
                        Last Layer: Edges
                    </Link>

                    <Link  onClick = {props.scrollTop}
                           className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                           to={`${props.url}/last-layer-orient`}
                    >
                        Last Layer: Orientation
                    </Link>
                </div>
            </div>
        </>
    );
}

export const LastOrientation = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Orientation</h2>
                    </div>
                    <div className='col-12 mt-2'>
                        This is the last step in solution of cube using Beginner's Method. This step has only one
                        algorithm.
                    </div>
                    <div className='col-12 mt-3'>
                        <h3>Steps</h3>
                    </div>
                    <div className='col-12'>
                        <ol>
                            <li>
                                <strong>Choosing a starting corner: </strong>The first thing do in this step is to
                                choose a corner, that is not oriented correctly and make sure that corner is at
                                front-top-right corner.
                            </li>
                            <li>
                                <strong>Applying algorithm: </strong>The next thing to do is to apply algorithm
                                <strong> R' D' R D </strong> until the corner is oriented correctly.
                                Don't worry if bottom two layers are spoiled a little bit, they will get fixed later.
                            </li>
                            <li>
                                <strong>Developing next corner: </strong>Get next corner that is not correctly oriented
                                at the front-top-right position.<br/>
                                <strong>Note: </strong>One important thing to note in this step is that, you don't
                                turn whole cube but rotate only the top layer, because, if you rotate the whole cube
                                the bottom two layers won't be fixed and you will have to solve whole cube again.
                            </li>
                            <li>
                                <strong>Repeating steps 2 and 3: </strong> You have to repeat steps 2 and 3 util all the
                                corners are correctly oriented.
                            </li>
                        </ol>
                    </div>
                    <div className='col-12 mt-4'>
                        <h3>Algorithms</h3>
                    </div>
                    <div className='col-12'>
                        <p>
                            As mentioned before, there is only one algorithm in this step.
                        </p>
                        <p>
                            <strong>Note: </strong>I have all four pieces not oriented. Sometimes, there
                            may be only three or two pieces not oriented.
                        </p>
                    </div>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>( R'</span>&nbsp;
                            <span className='tab-space-clear'>D'</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>D )</span>&nbsp;
                            <span className='tab-space-clear'>x2</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'normal'
                                   cubeData = {props.cubeData.filter((data) => data.id === 31)[0]}
                                   id='31' height='300px'
                        />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12'>
                        <h3 style={{textDecoration: 'none'}}>
                            Final Result <span role="img" aria-label='Congratulations'>🎉</span>
                        </h3>
                    </div>
                    <div className='col-12'>
                        <p>
                            Congratulations on solving world's most famous puzzle.
                        </p>
                        <p>
                            Your cube should look like this now.
                        </p>
                    </div>
                </div>
            </div>
            <Cube cubeId="id1"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 1)[0]}
            />
            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/last-layer-corners`}
                    >
                        Last Layer: Corners
                    </Link>
                </div>
            </div>
        </>
    );
}