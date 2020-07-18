import React, { Component } from 'react';
import { COLORS } from '../shared/colors';
import { Jumbotron } from 'reactstrap';
import Cube from './CubeComponent'; 
import CubeThree from './CubeThreeComponent';
import { CUBE_DATA } from '../shared/cubeData';

class Beginner extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS,
            cubeData: CUBE_DATA
        };
    }

    render() {
        return(
            <>
                <Jumbotron className="bg-secondary">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 align-self-center">
                                <h1>Rubik's Cube: Beginner's Method</h1>
                                <cite>
                                    It's never too late to learn.
                                </cite>
                                <br/>
                                <p className="float-right">
                                    ~ Malcolm Forbes
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 d-none d-sm-block">
                                <img src="../images/cube-5-nb.png" height="350px" alt="Rubik's Cube" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="beginner-div">
                    <div className="container">
                        <div className="row">
                            <h2 className="col-12">The Basics</h2>
                            <p className="col-12">
                                Basics are the very important in learning anything. So, let's cover all the basics.
                            </p>
                        </div>
                        <div className="row">
                            <h5 className="col-12">The Rubik's Cube</h5>
                            <p className="col-12">
                                A 3 x 3 Rubik's have a total of 6 faces, each face has 9 colored tiles.
                                A cube is said to be in a solved state when all the faces have a single color.
                                So, a solved cube looks something like this:
                            </p>
                        </div>
                    </div>
                    <Cube cubeId="id1"
                        cubeClasses="cube"
                        cubeTitle='front'
                        colors={this.state.colors.filter((color) => color.id === 1)[0]}
                    />
                    <div className="container">
                        <div className="row">
                            <h5 className="col-12">The center pieces</h5>
                            <p className="col-12">
                                In a cube, any piece of small cube can change it's position, but center pieces/cubes
                                remain at their respective positions. This is the reason why when solving a cube everything
                                is built around centers. Another thing, to note about center pieces is that, unlike all other pieces
                                they have only one face and one color.
                            </p>
                            <p className="col-12">    
                                So, if we represent all pieces that are not on their correct positions with
                                grey color. A general unsolved cube will look something like this:
                            </p>
                        </div>
                    </div>
                    <Cube cubeId="id2" 
                        cubeClasses="cube"
                        cubeTitle='front'
                        colors={this.state.colors.filter((color) => color.id === 2)[0]}
                    />
                    <div className="container">
                        <div className="row">
                            <h5 className="col-12">The corner pieces</h5>
                            <p className="col-12">
                                These are the pieces that form the corners or the vertices of the cube. These pieces have
                                three faces and one color on each face. Thus, they have a total of three colors each.
                                The cube below shows all the corner pieces of the cube:
                            </p>
                        </div>
                    </div>
                    <Cube cubeId="id3"
                        cubeClasses="cube"
                        cubeTitle='front'
                        colors={this.state.colors.filter((color) => color.id === 3)[0]}
                    />
                    <div className="container">
                        <div className="row">
                            <h5 className="col-12">The Edge pieces</h5>
                            <p className="col-12">
                                These are the pieces that lie between two corners and form the edges of the cube.
                                Each of these has two faces containing two different colors. The cube below shows
                                all the edge pieces:
                            </p>
                        </div>
                    </div>
                    <Cube cubeId="id4"
                        cubeClasses="cube"
                        cubeTitle='front'
                        colors={this.state.colors.filter((color) => color.id === 4)[0]}
                    />
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
                            <h5 className='col-12'>Front Prime (F')</h5>
                            <p className='col-12'>
                                The front prime move, denoted by <strong>F'</strong>, is just 90&deg; rotation
                                opposite to <strong>F</strong> move.
                            </p>
                        </div>
                        <div className='row align-self-center'>
                            <p className='col-12 col-md-6 align-self-center'>
                                The <strong>F'</strong> is like this:
                            </p>
                            <div className='col-12 col-md-6'>
                                <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 3)[0]}
                                    id='3' height='300px' />
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
                            <h5 className='col-12'>Right Prime (R')</h5>
                            <p className='col-12'>
                                The right move, denoted by <strong>R'</strong>, is just 90&deg; rotation
                                of right face opposite to <strong>R</strong>.
                            </p>
                        </div>
                        <div className='row align-self-center'>
                            <p className='col-12 col-md-6 align-self-center'>
                                The <strong>R'</strong> move is like this:<br/>
                                Again, if you rotate look right face as front, you will notice the resemblance between
                                 <strong> R'</strong> move and <strong>F'</strong> move.
                            </p>
                            <div className='col-12 col-md-6'>
                                <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 5)[0]}
                                    id='5' height='300px' />
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
                            <h5 className='col-12'>Left Prime (L')</h5>
                            <p className='col-12'>
                                The left prime move is denoted by <strong>L'</strong>.
                            </p>
                        </div>
                        <div className='row align-self-center'>
                            <p className='col-12 col-md-6 align-self-center'>
                                The <strong>L'</strong> move is like this:<br/>
                                This has a resemblance with <strong>F'</strong>
                            </p>
                            <div className='col-12 col-md-6'>
                                <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 7)[0]}
                                    id='7' height='300px' />
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
                            <h5 className='col-12'>Top Prime (U')</h5>
                            <p className='col-12'>
                                The top prime move is denoted by <strong>U'</strong>.
                            </p>
                        </div>
                        <div className='row align-self-center'>
                            <p className='col-12 col-md-6 align-self-center'>
                                The <strong>U'</strong> move is like this:<br/>
                                This has a resemblance with <strong>F'</strong>
                            </p>
                            <div className='col-12 col-md-6'>
                                <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 9)[0]}
                                    id='9' height='300px' />
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
                            <h5 className='col-12'>Bottom Prime (D')</h5>
                            <p className='col-12'>
                                The bottom prime move is denoted by <strong>D'</strong>.
                            </p>
                        </div>
                        <div className='row align-self-center'>
                            <p className='col-12 col-md-6 align-self-center'>
                                The <strong>D'</strong> move is like this:<br/>
                                This has a resemblance with <strong>F'</strong>
                            </p>
                            <div className='col-12 col-md-6'>
                                <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 11)[0]}
                                    id='11' height='300px' />
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

                        <div className='row'>
                            <h5 className='col-12'>Back Prime (B')</h5>
                            <p className='col-12'>
                                The back prime move is denoted by <strong>B'</strong>.
                            </p>
                        </div>
                        <div className='row align-self-center'>
                            <p className='col-12 col-md-6 align-self-center'>
                                The <strong>B'</strong> move is like this:<br/>
                                This has a resemblance with <strong>F'</strong>.
                            </p>
                            <div className='col-12 col-md-6'>
                                <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 13)[0]}
                                    id='13' height='300px' />
                            </div>
                        </div>

                        <div className="row">
                            <h2 className='col-12'>Algorithm Example</h2>
                            <p className='col-12'>
                                Now, since we have seen the all the atomic moves, let's combine them and look
                                &nbsp;at an example of an algorithm.
                            </p>
                        </div>
                        <div className='row align-self-center'>
                            <p className='col-12 col-md-6 align-self-center'>
                                Let's see the following algoritm in action:<br />
                                <strong>F R U R' U' F'</strong><br/>
                                This is a very important algorithm, you will also see it later in the tutorial
                            </p>
                            <div className='col-12 col-md-6'>
                                <CubeThree cubeData = {this.state.cubeData.filter((data) => data.id === 14)[0]}
                                    id='14' height='300px' />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Beginner;