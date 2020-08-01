import React from 'react';
import Cube from '../CubeComponent';
import CubeThree from "../CubeThreeComponent";
import { Link } from 'react-router-dom';

export const FixCross = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='col-12'>Solving First Layer</h2>
                    <div className='col-12'>
                        <hr/>
                    </div>
                    <p className='col-12'>
                        You have got all the weapons you require in your arsenal. But, what is the use
                         if you don't know when and how to use a weapon.
                        So, let's start implementing the knowledge we have gained so far.
                    </p>
                    <p className='col-12'>
                        Solving first layer, is divided into two parts:
                        <ol>
                            <li>
                                <strong>The White Cross:</strong> In this step we will make a cross,
                                 which is all four edge pieces around white center, with perfect alignment 
                                 with adjacent faces.
                            </li>
                            <li>
                                <strong>White corners:</strong> In this step, the white face is fully completed
                                 and bottom first layer is fully fixed.
                            </li>
                        </ol>
                    </p>
                    <p className='col-12'>
                        Come aboard, it gonna be a fun ride!
                    </p>
                </div>
                <div className='row'>
                    <h2 className='col-12'>The White Cross</h2>
                    <p className='col-12'>
                        Just don't get mislead by the name,
                        you can start solving by creating cross on any colored face. It's more like
                        a tradition to start solving with white face.
                    </p>
                    <p className='col-12'>
                        As I have said before, in the starting, all pieces other than the center pieces are
                         considered not solved. So, representing all the not solved pieces using grey color.
                         The initial unsolved cube can be represented as:
                    </p>
                </div>
            </div>
            <Cube cubeId="id0" 
                cubeClasses="cube"
                cubeTitle='front'
                colors={props.colors.filter((color) => color.id === 2)[0]}
            />
            <div className='container'>
                <div className='row'>
                    <p className='col-12'>
                        In the above example, you see white face at the bottom, which is good and helpful for 
                        solving middle and top layers of a cube while solving first layer, it is good for keeping
                        white face as the top face. So, in this section, from now on, we will see
                        see white face as the top face.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12'>Final Result of this step</h3>
                    <p className='col-12'>
                        What! already final result?
                    </p>
                    <p className='col-12'>
                        Actually yes, this step is very simple, so, with some goofing around, you can solve this yourself.
                        Also, I will suggest you to find your way to the final result, as this will help you to get
                        familiar with the cube, which will be very helpful in future steps.<br/>
                        This is your goal for the step:
                    </p>
                </div>
            </div>
            <Cube cubeId="id1" 
                cubeClasses="cube"
                cubeTitle='front'
                Cross = {true}
                colors={props.colors.filter((color) => color.id === 5)[0]}
            />
            <div className='container'>
                <div className='row'>
                    <p className='col-12'>
                        There is something very important to note in the above state of the cube. That is
                        along with the completed white face, all the pieces on the top "layer" are matched
                        correctly with the center of the respective face.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12'>
                        Some algorithms to help
                    </h3>
                    <p className='col-12'>
                        I still strongly suggest to find your way to the final result yourself. But, if you
                        face some difficuilties, I have put down some algorithms, that can support you:
                    </p>
                </div>

                <div className='row'>
                    <h5 className='col-12'>Algorithm 1:</h5>
                    <p className='col-12'>
                        The most simple case is when the side piece's orientation is correct but it is
                        in the bottom layer. You can solve with with just a <strong>2F</strong>
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong>2 F</strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'first_cross'
                            cubeData = {props.cubeData.filter((data) => data.id === 17)[0]}
                            id='17' height='300px'
                        />
                    </div>
                </div>

                <div className='row'>
                    <h5 className='col-12'>Algorithm 2:</h5>
                    <p className='col-12'>
                        Another case is, when the piece is in bottom layer and the orientation is wrong,
                        this case is a bit tricky than the previous one.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>F'</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>D'</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>2 F</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'first_cross'
                            cubeData = {props.cubeData.filter((data) => data.id === 18)[0]}
                            id='18' height='300px'
                        />
                    </div>
                </div>

                <div className='row'>
                    <h5 className='col-12'>
                        Algorithm 3:
                    </h5>
                    <p className='col-12'>
                        The most complicated case is when three pieces are fixed while the last one is
                        oriented wrong. The algorithm and visualization below can help you with that.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'first_cross'
                            cubeData = {props.cubeData.filter((data) => data.id === 19)[0]}
                            id='19' height='300px'
                        />
                    </div>
                </div>

                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                        to={`${props.url}/basic-moves-example`}
                    >
                        Algorithm Examples
                    </Link>

                    <Link  onClick = {props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                        to={`${props.url}/first-layer-corners`}
                    >
                        First Layer: Corners
                    </Link>
                </div>
            </div>
        </>
    );
}

export const FixCorners = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='col-12'>White Corners</h2>
                    <div className='col-12'>
                        <hr/>
                    </div>
                    <p className='col-12'>
                        Now, since we have fixed the white cross successfully, we will continue fixing the corners
                        to complete the first (White) layer.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12'>Steps to fix the corner piece:</h3>
                    <ol>
                        <li>
                            <strong>Finding a piece:</strong> Look at a place where you can put a white corner piece,
                            and find the piece to be placed there. The piece to be placed there will have a white face
                            and colors of other two faces will be the color of other two centers between which the piece
                            is lying.
                        </li>
                        <li>
                            <strong>Developing the piecce:</strong> Developing brings your piece on the correct position.
                            After which, you can just apply an algorithm to fix the piece. To develop a piece, you have to
                            position it on the bottom layer just under the position where it is to be fixed. Something like
                            this:
                        </li>
                    </ol>
                </div>
            </div>
            <Cube cubeId="id1" 
                cubeClasses="cube"
                cubeTitle='front'
                Cross = {true}
                colors={props.colors.filter((color) => color.id === 6)[0]}
            />
            <div className='container'>
                <div className='row'>
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            Every time white face might not be on front side, there are actually
                            three cases as explained below. Also, it might be the case that piece is at its correct
                            position, but oriented wrong, then you might have to pop it first.
                        </li>
                    </ul>
                    <ol start="3">
                        <li>
                            <strong> Applying Algorithm:</strong> This is the final step. Three are three cases
                            based on where white piece is facing when placed directly under the spot.
                        </li>
                    </ol>
                    <p className='col-12'>
                        Again, this is also a very simple step, so I will suggest you to try and do this yourself.
                        If you find yourself struck or you lack patience, you can just refer to the algorithms below.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12'>Algorithms</h3>
                </div>
                <div className='row'>
                    <h5 className='col-12'>Algorithm 1</h5>
                    <p className='col-12'>
                        This is when the white face is in the front direction.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>F D <span className='tab-space-clear'>F'</span></strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'first_corners'
                            cubeData = {props.cubeData.filter((data) => data.id === 20)[0]}
                            id='20' height='300px'
                        />
                    </div>
                </div>

                <div className='row'>
                    <h5 className='col-12'>Algorithm 2</h5>
                    <p className='col-12'>
                        This is when the white face is in the right direction.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>D'</span>&nbsp;
                            <span className='tab-space-clear'>R</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'first_corners'
                            cubeData = {props.cubeData.filter((data) => data.id === 21)[0]}
                            id='21' height='300px'
                        />
                    </div>
                </div>

                <div className='row'>
                    <h5 className='col-12'>Algorithm 3</h5>
                    <p className='col-12'>
                        This is when the white face is in the bottom direction.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>L</span>&nbsp;
                            <span className='tab-space-clear'>2 D</span>&nbsp;
                            <span className='tab-space-clear'>L'</span>&nbsp;
                            <span className='tab-space-clear'>F'</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'first_corners'
                            cubeData = {props.cubeData.filter((data) => data.id === 22)[0]}
                            id='22' height='300px'
                        />
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <h3 className='col-12'>The Final Result</h3>
                    <p className='col-12'>
                        Congratulations! You have completed the first step of solving the cube. Your
                        cube should look something like this now:
                    </p>
                </div>
            </div>
            <Cube cubeId="id2" 
                cubeClasses="cube"
                cubeTitle='front'
                Cross = {true}
                colors={props.colors.filter((color) => color.id === 7)[0]}
            />
            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                        to={`${props.url}/first-layer`}
                    >
                        First Layer: Cross
                    </Link>

                    <Link  onClick = {props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                        to={`${props.url}/second-layer`}
                    >
                        Second Layer
                    </Link>
                </div>
            </div>
        </>
    );
}