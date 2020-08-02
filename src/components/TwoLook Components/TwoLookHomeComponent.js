import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Cube from "../CubeComponent";

export const TwoHome = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Two Look OLL and PLL</h2>
                        <hr/>
                    </div>
                    <div className='col-12'>
                        <p>
                            This method is actually the Fridrich OLL and PLL steps executed in two parts,
                            which not only reduces the number of algorithms in the original Fridrich method,
                            but also is considerably faster than the Beginner's Method.
                        </p>
                    </div>
                    <div className='col-12'>
                        <p>
                            Both the <NavLink to='/tutorial/1'>Beginner's Method</NavLink> and Two Look OLL and PLL
                            methods have common steps till the second layer solution, after which Two Look method
                            uses a little more complex algorithms to first orient and then permutate the last layer.
                        </p>
                        <p>
                            The terms OLL and PLL are derived from Fridrich method.
                        </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <h4>OLL (Orient Last Layer)</h4>
                    </div>
                    <div className='col-12'>
                        <p>
                            After the first two layers are solved, the last layer is first oriented such that
                            top layer is all yellow. It doesn't matter if the sides don't match correctly, we will be
                            matching sides correctly in the Permutation step.
                        </p>
                        <p>
                            So, OLL or Orient Last Layer step results in the following state of the cube.
                        </p>
                    </div>
                </div>
            </div>
            <Cube cubeId="id16"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 16)[0]}
            />
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>PLL (Permutate Last Layer)</h4>
                    </div>
                    <div className='col-12'>
                        <p>
                            This is the last step of both the Fridrich and Two Look OLL and PLL (Two look version)
                            methods. This step is applied when both first layer and second layers are solved and
                            OLL has been applied. It completely solves the Rubik's Cube.
                        </p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <p>
                            Now, as you may have noticed, while solving last layer in Beginner's Method,
                            we complete the cross first, orient the edges, correctly position the corners and then apply
                            orient the corners correctly. Whereas, in this step we first orient the top face and then
                            permutate the corners. This reduces the solving time.
                        </p>
                        <p>
                            As the starting steps for both the methods are same, you can just skip them or do a revision
                            if you want to.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          style={{width: '180px'}}
                          className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                          to={`${props.url}/beginner-basics`}
                    >
                        Cube Basics
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className='dual-btn-container row' style={{marginTop: '0'}}>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                          style={{width: '180px'}}
                          to={`${props.url}/last-layer-corners`}
                    >
                        Two Look OLL
                    </Link>
                </div>
            </div>
        </>
    );
}