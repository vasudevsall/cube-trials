import React from 'react';
import Cube, { CubeFace } from "../CubeComponent";
import CubeThree from "../CubeThreeComponent";
import {Link} from "react-router-dom";

export const TwoPLL = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Two Look PLL</h2>
                        <hr/>
                    </div>
                    <div className='col-12'>
                        <p>
                            This is the last step in the solution of a rubik's cube using this method. This step itself
                            is divided into two parts.
                        </p>
                        <ol>
                            <li>
                                <strong>Permute Corners: </strong>This is the first part of Two Look OLL. In this step,
                                we permute the corners and place them at their respective places.
                            </li>
                            <li>
                                <strong>Permute Edges: </strong>This the last part of Two Look PLL. In this step, we
                                permute the edges and thus, complete the solution of Rubik's Cube.
                            </li>
                        </ol>
                        <p>
                            <strong>Note: </strong>The Two Look PLL given in here is actually a simplified version of
                            Two Look PLL, with use of only two algorithms.
                        </p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h2>Permute Corners</h2>
                        <hr/>
                    </div>
                    <div className={'col-12'}>
                        In this step, we are going to permute over the corners and place them at their respective
                        positions.
                    </div>
                    <div className={'col-12'}>
                        To understand the algorithm, you have to first understand a new term.
                    </div>
                </div>
                <div className={'row mt-5'}>
                    <div className={'col-12'}>
                        <h4>Headlights</h4>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12 col-sm-4'} style={{width: '180px', height: '180px'}}>
                        <CubeFace id='1' face = {'front'}
                                  colors= {['red', 'grey', 'red', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey']}
                        />
                    </div>
                    <div className={'col-12 col-sm-6 d-flex  justify-content-center align-self-center'}>
                        <p>
                            This kind of pattern, where two corners on top layer of a face are of same color is called
                            a <strong>headlight</strong>. Headlights are important as they help in recognition of
                            orientation of cube, before application of Two Look PLL algorithms.<br/>
                            <strong>Note: </strong> If all three colors match, then also it is also a special
                            kind of headlight.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h3 style={{fontWeight: 'bold'}}>Algorithms</h3>
                    </div>
                    <div className={'col-12'}>
                        <p>
                            The algorithm is applied by keeping the headlight at the back. If there is no headlight,
                            then apply anywhere, as you will have to apply this algorithm twice. Also, if there is
                            headlight on all faces, then skip this step and go ahead.
                        </p>
                    </div>
                </div>

                <div className='row align-self-center'>
                    <p className='col-12 col-lg-6 align-self-center text-center'>
                        <strong className='tab-space'>
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>F</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>B2</span>&nbsp;
                            <span className='tab-space-clear'>R</span>&nbsp;
                            <span className='tab-space-clear'>F'</span>&nbsp;
                            <span className='tab-space-clear'>R'</span>&nbsp;
                            <span className='tab-space-clear'>B2</span>&nbsp;
                            <span className='tab-space-clear'>R2</span>
                        </strong>
                    </p>
                    <div className='col-12 col-lg-6 cube-three-margin'>
                        <CubeThree cubeState = 'normal'
                                   cubeData = {props.cubeData.filter((data) => data.id === 34)[0]}
                                   id='34' height='300px'
                        />
                    </div>
                </div>

                <div className={'row mt-5'}>
                    <div className={'col-12'}>
                        <h3 style={{fontWeight: 'bold'}}>Final Result</h3>
                        <p>
                            This step will result in headlights formed on all 4 sides. So, your cube should look
                            something like this now.
                        </p>
                    </div>
                </div>
            </div>
            <Cube cubeId="id17"
                  cubeClasses="cube"
                  cubeTitle='front'
                  Cross = {false}
                  colors={props.colors.filter((color) => color.id === 17)[0]}
            />

            <div className='container'>
                <div className='dual-btn-container row'>
                    <Link onClick = {props.scrollTop}
                          className='dual-color-btn dual-color-blue shine-hope-anim prev-nav-button'
                          to={`${props.url}/two-oll-animation`}
                    >
                        Two Look OLL: Animations
                    </Link>

                    <Link  onClick = {props.scrollTop}
                           className='dual-color-btn dual-color-blue shine-hope-anim next-nav-button'
                           to={`${props.url}/two-pll-edges`}
                    >
                        Two Look PLL: Edges
                    </Link>
                </div>
            </div>
        </>
    );
}

export const TwoEdges = (props) => {
    return(
      <>
          <div className={'container'}>
              <div className={'row'}>
                  <div className={'col-12'}>
                      <h2>Permute Edges</h2>
                      <hr/>
                  </div>
                  <div className={'col-12'}>
                      <p>
                          This is the final step in the solution of a Rubik's cube using Two Look OLL and PLL.
                          This step again only has one algorithm. But, you may have to apply is more than once based on
                          the pattern formed on the cube.
                      </p>
                  </div>
              </div>

              <div className={'row mt-5'}>
                  <div className={'col-12'}>
                      <h3>Algorithm</h3>
                  </div>
                  <div className='col-12'>
                      <p>
                          This algorithm is applied keeping the fully solved face (top layer having headlight with
                          three colors matched) at the back. If there is fully no solved face, then apply the algorithm
                          again.
                      </p>
                      <p>
                          <strong>Note: </strong>Even with completely solved face at back, sometimes you may have to
                          apply this algorithm twice.
                      </p>
                  </div>
              </div>
              <div className='row align-self-center'>
                  <p className='col-12 col-lg-6 align-self-center text-center'>
                      <strong className='tab-space'>
                          <span className='tab-space-clear'>F2</span>&nbsp;
                          <span className='tab-space-clear'>U</span>&nbsp;
                          <span className='tab-space-clear'>L</span>&nbsp;
                          <span className='tab-space-clear'>R'</span>&nbsp;
                          <span className='tab-space-clear'>F2</span>&nbsp;
                          <span className='tab-space-clear'>L'</span>&nbsp;
                          <span className='tab-space-clear'>R</span>&nbsp;
                          <span className='tab-space-clear'>U</span>&nbsp;
                          <span className='tab-space-clear'>F2</span>
                      </strong>
                  </p>
                  <div className='col-12 col-lg-6 cube-three-margin'>
                      <CubeThree cubeState = 'normal'
                                 cubeData = {props.cubeData.filter((data) => data.id === 35)[0]}
                                 id='35' height='300px'
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
                        to={`${props.url}/two-pll`}
                  >
                      Two Look PLL: Corners
                  </Link>
              </div>
          </div>
      </>
    );
}