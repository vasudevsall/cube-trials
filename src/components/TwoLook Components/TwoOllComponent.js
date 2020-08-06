import React from 'react';
import {Link} from 'react-router-dom';
import CubeThree from "../CubeThreeComponent";
import Cube from "../CubeComponent";

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

                <div className='row justify-content-center'>
                    <div className={'col-12 col-lg-6'}>
                        <div className='media mt-3'>
                            <img className='mr-0 mr-sm-5'
                                 src={process.env.PUBLIC_URL + "/images/twoLook/1.gif"}
                                 alt="Algorithm-1"
                                 width={'150px'}
                                 height={'150px'}
                            />
                            <div className='media-body align-self-center mt-sm-3'>
                                <h5>Case 1</h5>
                                (R U R' U) R U2 R'
                            </div>
                        </div>
                    </div>

                    <div className={'col-12 col-lg-6'}>
                        <div className='media mt-3'>
                            <img className='mr-0 mr-sm-5'
                                 src={process.env.PUBLIC_URL + "/images/twoLook/2.gif"}
                                 alt="Algorithm-2"
                                 width={'150px'}
                                 height={'150px'}
                            />
                            <div className='media-body align-self-center mt-sm-3'>
                                <h5>Case 2</h5>
                                (L' U' L U') L' U2 L
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className={'col-12 col-lg-6'}>
                        <div className='media mt-3'>
                            <img className='mr-0 mr-sm-5'
                                 src={process.env.PUBLIC_URL + "/images/twoLook/3.gif"}
                                 alt="Algorithm-3"
                                 width={'150px'}
                                 height={'150px'}
                            />
                            <div className='media-body align-self-center mt-sm-3'>
                                <h5>Case 3</h5>
                                y (R' U' R) U' (R' U R) U' (R' U2 R)
                            </div>
                        </div>
                    </div>

                    <div className={'col-12 col-lg-6'}>
                        <div className='media mt-3'>
                            <img className='mr-0 mr-sm-5'
                                 src={process.env.PUBLIC_URL + "/images/twoLook/4.gif"}
                                 alt="Algorithm-4"
                                 width={'150px'}
                                 height={'150px'}
                            />
                            <div className='media-body align-self-center mt-sm-3'>
                                <h5>Case 4</h5>
                                R U2 R2 U' R2 U' R2 U2 R
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className={'col-12 col-lg-6'}>
                        <div className='media mt-3'>
                            <img className='mr-0 mr-sm-5'
                                 src={process.env.PUBLIC_URL + "/images/twoLook/5.gif"}
                                 alt="Algorithm-5"
                                 width={'150px'}
                                 height={'150px'}
                            />
                            <div className='media-body align-self-center mt-sm-3'>
                                <h5>Case 5</h5>
                                y (R U R' U') (R U’ R’ U2)*2 (R U R’)
                            </div>
                        </div>
                    </div>

                    <div className={'col-12 col-lg-6'}>
                        <div className='media mt-3'>
                            <img className='mr-0 mr-sm-5'
                                 src={process.env.PUBLIC_URL + "/images/twoLook/6.gif"}
                                 alt="Algorithm-6"
                                 width={'150px'}
                                 height={'150px'}
                            />
                            <div className='media-body align-self-center mt-sm-3'>
                                <h5>Case 6</h5>
                                ( r U R' U') ( r' F R F')
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className={'col-12 col-lg-6'}>
                        <div className='media mt-3'>
                            <img className='mr-0 mr-sm-5'
                                 src={process.env.PUBLIC_URL + "/images/twoLook/7.png"}
                                 alt="Algorithm-7"
                                 width={'150px'}
                                 height={'150px'}
                            />
                            <div className='media-body align-self-center mt-sm-3'>
                                <h5>Case 7</h5>
                                F' ( r U R' U') (r' F R )
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'col-12'}>
                        <p>
                            The animations for all these algorithms are given in the next section.
                        </p>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-12'>
                        <h3>Final Result</h3>
                        <p>Final Result after this step is as follows.</p>
                    </div>
                </div>
            </div>
            <Cube cubeId="id16"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 16)[0]}
            />
            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/last-layer`}
                    >
                        Two Look OLL: Cross
                    </Link>

                    <Link  onClick = {props.scrollTop}
                           className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                           to={`${props.url}/two-oll-animation`}
                    >
                        Two Look OLL: Animations
                    </Link>
                </div>
            </div>
        </>
    );
}

export const TwoOLLAnimations = (props) => {
    return (
        <>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h2>Algorithms</h2>
                        <hr/>
                    </div>
                    <div className={'col-12'}>
                        <p>
                            As mentioned previously, there are a total of 7 cases for Two Look OLL. All cases with
                            animations are given in this section.
                        </p>
                    </div>
                </div>

                <div className='row align-self-center'>
                    <div className={'col-12'}>
                        <h5>Case 1:</h5>
                    </div>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>( R</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U )</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U 2</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'two_oll_final_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 36)[0]}
                                   id='36' height='300px'
                        />
                    </div>
                </div>

                <div className='row align-self-center'>
                    <div className={'col-12'}>
                        <h5>Case 2:</h5>
                    </div>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>( L'</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>L</span>&nbsp;
                            <span className='tab-space-clear'>U' )</span>&nbsp;
                            <span className='tab-space-clear'>L'</span>&nbsp;
                            <span className='tab-space-clear'>U 2</span>&nbsp;
                            <span className='tab-space-clear'>L</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'two_oll_final_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 37)[0]}
                                   id='37' height='300px'
                        />
                    </div>
                </div>

                <div className='row align-self-center'>
                    <div className={'col-12'}>
                        <h5>Case 3:</h5>
                    </div>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong>
                            y (R' U' R) U' (R' U R) U' (R' U2 R)
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'two_oll_final_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 38)[0]}
                                   id='38' height='300px'
                        />
                    </div>
                </div>

                <div className='row align-self-center'>
                    <div className={'col-12'}>
                        <h5>Case 4:</h5>
                    </div>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className={'tab-space'}>
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>U 2</span>&nbsp;
                            <span className='tab-space-clear'>R 2</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>R 2</span>&nbsp;
                            <span className='tab-space-clear'>U'</span>&nbsp;
                            <span className='tab-space-clear'>R 2</span>&nbsp;
                            <span className='tab-space-clear'>U 2</span>&nbsp;
                            <span className='tab-space-clear'>R</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'two_oll_final_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 39)[0]}
                                   id='39' height='300px'
                        />
                    </div>
                </div>

                <div className='row align-self-center'>
                    <div className={'col-12'}>
                        <h5>Case 5:</h5>
                    </div>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong>
                            y (R U R' U') (R U’ R’ U2)*2 (R U R’)
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'two_oll_final_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 40)[0]}
                                   id='40' height='300px'
                        />
                    </div>
                </div>

                <div className='row align-self-center'>
                    <div className={'col-12'}>
                        <h5>Case 6:</h5>
                    </div>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className={'tab-space'}>
                            <span className='tab-space-clear'>( r</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U' )</span>&nbsp;
                            <span className='tab-space-clear'>( r'</span>&nbsp;
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>F' )</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'two_oll_final_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 41)[0]}
                                   id='41' height='300px'
                        />
                    </div>
                </div>

                <div className='row align-self-center'>
                    <div className={'col-12'}>
                        <h5>Case 7:</h5>
                    </div>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className={'tab-space'}>
                            <span className='tab-space-clear'>F'</span>&nbsp;
                            <span className='tab-space-clear'>( r</span>&nbsp;
                            <span className='tab-space-clear'>U</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>U' )</span>&nbsp;
                            <span className='tab-space-clear'>( r'</span>&nbsp;
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>R )</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'two_oll_final_layer'
                                   cubeData = {props.cubeData.filter((data) => data.id === 42)[0]}
                                   id='42' height='300px'
                        />
                    </div>
                </div>

            </div>

            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/two-oll`}
                    >
                        Two Look OLL
                    </Link>

                    <Link  onClick = {props.scrollTop}
                           className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                           to={`${props.url}/two-pll`}
                    >
                        Two Look PLL: Corners
                    </Link>
                </div>
            </div>
        </>
    );
}