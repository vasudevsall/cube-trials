import React from 'react';
import CubeThree from '../CubeThreeComponent';
import { Link } from 'react-router-dom';

export const Moves = (props) => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <h2 className="col-12">Basic Moves</h2>
                    <div className='col-12'>
                        <hr/>
                    </div>
                    <p className='col-12'>
                        There are some basic or atomic moves in cubing world. These are the moves which
                        are combined together to form all the algorithms required to solve the cube.
                        (Don't worry there are not much of them in this tutorial).
                    </p>
                    <p className='col-12'>
                        Each of these moves is defined as: 
                        <em> The face rotated 90&deg; clockwise when it is treated as the front face.</em>
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
                    <p className='col-12 col-lg-6 align-self-center'>
                        To understand you can look at the adjacent visualization.<br/>
                        All the visualizations are initially paused.
                        Click on the play / pause to play the visualization.
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 2)[0]}
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
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>R</strong> move is like this.<br/><br/>
                        I hope you have realized it by now, if not, you can drag and rotate all the moving cubes.
                        So, if you drag and make right face as front, you will notice <strong>R</strong> move looking
                        just like <strong>F</strong>.<br/>
                        Also, there are some other things, you must know anout this cube:<br/>
                        <ul style={{listStyle: 'square'}}>
                            <li>
                                You can change the speed of rotation of cube by clicking on Speed and Camera.
                                and then selecting the speed of rotation as per your needs.
                            </li>
                            <li>
                                If you want cube to pause after step, open <strong>Other Controls</strong> and
                                check the <strong>Steps</strong> checkbox.
                            </li>
                            <li>
                                You can rotate the faces by dragging.
                            </li>
                            <li>
                                If you mess up the cube rotations and forget which face was front initially,
                                you can just open <strong>Other Controls</strong> and then press
                                <strong> Reset Camera</strong>.
                            </li>
                        </ul>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 4)[0]}
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
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>L</strong> move is like this:<br/>
                        You may again note the resemblance between <strong>L</strong> and <strong>F</strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 6)[0]}
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
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>U</strong> move is like this:<br/>
                        This has a resemblance with <strong>F</strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 8)[0]}
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
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>D</strong> move is like this:<br/>
                        This has a resemblance with <strong>F</strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 10)[0]}
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
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>B</strong> move is like this:<br/>
                        This has a resemblance with <strong>F</strong>. In the first look, it might look
                        that this move is opposite of <strong>F</strong>, but if you visualize back face as front,
                        you will surely see the similarity.
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 12)[0]}
                            id='12' height='300px' />
                    </div>
                </div>

                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                        to={`${props.url}/beginner-basics`}
                    >
                        Cube Basics
                    </Link>

                    <Link  onClick = {props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                        to={`${props.url}/basic-moves-prime`}
                    >
                        Prime Moves
                    </Link>
                </div>
            </div>
        </>
    );
}

export const PrimeMoves = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='col-12'>Prime Moves</h2>
                    <div className='col-12'>
                        <hr/>
                    </div>
                    <p className='col-12'>
                        These are also basic or atomic moves, just in the direction opposite 
                        to the Basic, Forward ones.
                    </p>
                    <p className='col-12'>
                        These are the Prime moves, we need here:
                    </p>
                </div>

                <div className='row'>
                    <h5 className='col-12'>Front Prime (F')</h5>
                    <p className='col-12'>
                        The front prime move, denoted by <strong>F'</strong>, is just 90&deg; rotation
                        opposite to <strong>F</strong> move.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>F'</strong> is like this:
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 3)[0]}
                            id='3' height='300px' />
                    </div>
                </div>
                    

                <div className='row'>
                    <h5 className='col-12'>Right Prime (R')</h5>
                    <p className='col-12'>
                        The right move, denoted by <strong>R'</strong>, is just 90&deg; rotation
                        of right face opposite to <strong>R</strong>.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>R'</strong> move is like this:<br/>
                        Again, if you rotate look right face as front, you will notice the resemblance between
                            <strong> R'</strong> move and <strong>F'</strong> move.
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 5)[0]}
                            id='5' height='300px' />
                    </div>
                </div>

                

                <div className='row'>
                    <h5 className='col-12'>Left Prime (L')</h5>
                    <p className='col-12'>
                        The left prime move is denoted by <strong>L'</strong>.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>L'</strong> move is like this:<br/>
                        This has a resemblance with <strong>F'</strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 7)[0]}
                            id='7' height='300px' />
                    </div>
                </div>

                

                <div className='row'>
                    <h5 className='col-12'>Top Prime (U')</h5>
                    <p className='col-12'>
                        The top prime move is denoted by <strong>U'</strong>.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>U'</strong> move is like this:<br/>
                        This has a resemblance with <strong>F'</strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 9)[0]}
                            id='9' height='300px' />
                    </div>
                </div>

                

                <div className='row'>
                    <h5 className='col-12'>Bottom Prime (D')</h5>
                    <p className='col-12'>
                        The bottom prime move is denoted by <strong>D'</strong>.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>D'</strong> move is like this:<br/>
                        This has a resemblance with <strong>F'</strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 11)[0]}
                            id='11' height='300px' />
                    </div>
                </div>

                

                <div className='row'>
                    <h5 className='col-12'>Back Prime (B')</h5>
                    <p className='col-12'>
                        The back prime move is denoted by <strong>B'</strong>.
                    </p>
                </div>
                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center'>
                        The <strong>B'</strong> move is like this:<br/>
                        This has a resemblance with <strong>F'</strong>.
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 13)[0]}
                            id='13' height='300px' />
                    </div>
                </div>

                <div className='dual-btn-container row'>
                    <Link onClick={props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                        to={`${props.url}/beginner-moves`}
                    >
                        Basic Moves
                    </Link>

                    <Link onClick={props.scrollTop}
                        className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                        to={`${props.url}/basic-moves-example`}
                    >
                        Algorithm Examples
                    </Link>
                </div>
            </div>
        </>
    );
}

export const AlgorithmExample = (props) => {
    return(
        <div className='container'>
            <div className='row'>
                <h2 className='col-12'>Algorithm Examples</h2>
                <div className='col-12'>
                    <hr/>
                </div>
                <p className='col-12'>
                    Basic moves alone don't have much use in the cubing world, but a combination
                     of these form simple to complex algorithms, which give you the powers to solve a cube.
                </p>
                <p className='col-12'>
                    So, before going ahead and learning how to actually solve a cube, let's go ahead and
                     practice some algorithms. Practice always makes you better, you know!
                </p>
                <p className='col-12'>
                    Also, you may find yourself using one of these examples, in this or more advanced solving
                     methods.
                </p>
            </div>

            <div className='row'>
                <h5 className='col-12'>Example 1</h5>
                <p className='col-12'>
                    Let's just keep this one straight and simple.<br/>
                    Find the algorithm and the visualization of the same below:
                </p>
            </div>
            <div className='row'>
                <p className='col-12 col-lg-6 align-self-center text-center'>
                    <strong>F R U R' U' F'</strong>
                </p>
                <div className='col-12 col-lg-6 cube-three-margin'>
                    <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 14)[0]}
                        id='14' height='300px' />
                </div>
            </div>

            <div className='row'>
                <h5 className='col-12'>Example 2</h5>
                <p className='col-12'>
                    Let's not push too much. I will keep this one also a bit simple.
                </p>
            </div>
            <div className='row'>
                <p className='col-12 col-lg-6 align-self-center text-center'>
                    <strong>R U R' U R 2U R' U</strong><br/>
                    Here 2U means, rotation top leyer two times in the clockwise direction
                </p>
                <div className='col-12 col-lg-6 cube-three-margin'>
                    <CubeThree cubeData = {props.cubeData.filter((data) => data.id === 15)[0]}
                        id='15' height='300px' />
                </div>
            </div>

            <div className='row'>
                <h5 className='col-12'>Example 3</h5>
                <p className = 'col-12'>
                    Let's keep this as the last example. This being last, let's go with a little
                     tougher algorithm.
                </p>
                <p className='col-12'>
                    You will find braces in the algorithm below. These braces are used primarily for two things
                     one is grouping steps for memorization and the other is to denote the best way of grouping
                     together framents for finger tricks.<br/>
                    Finger tricks are a bit advanced stuff. So, just know that they help in speedcubing, and
                     help in reducing the solve time by a large factor.<br/>
                    The goal for these braces is to describe a Rubik's cube algorithm in the most comfortable and
                     efficient way to execute with the human hand. Taking down the hand off a side and repositioning
                     always takes time so we're trying to execute more operations at the same time.
                </p>
                <p className='col-12'>
                    That's a lot of information, so, let's just get on with the algorithm.
                </p>
            </div>
            <div className='row'>
                <p className='col-12 col-lg-6 align-self-center text-center'>
                    <strong>F R U' R' U' [R U R' F'] {"{[R U R' U'] [R' F R F']}"}</strong>
                </p>
                <div className='col-12 col-lg-6 cube-three-margin'>
                    <CubeThree cubeData = {props.cubeData.filter((data)=> data.id === 16)[0]}
                        id='16' height='300px' />
                </div>
            </div>

            <div className='row'>
                <p className='col-12 mt-3'>
                    Since we have laid down a good foundation with basic information about a cube
                     basic moves and basic notation. So, let's go ahead and learn, how to implement
                     this knowledge and solve a Rubik's cube.<br/>
                    Once you have practiced the above algorithms enough and you feel confident about them,
                     press the next button to start solving First Layer.
                </p>
            </div>

            <div className='dual-btn-container row'>
                <Link onClick={props.scrollTop}
                    className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                    to={`${props.url}/basic-moves-prime`}
                >
                    Prime Moves
                </Link>

                <Link onClick={props.scrollTop}
                    className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                    to={`${props.url}/first-layer`}
                >
                    First Layer: Cross
                </Link>
            </div>
        </div>
    );
}