import React, { Component } from 'react';
import { COLORS } from '../../shared/colors';
import Cube from '../CubeComponent';

class BeginnerHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS,
        }
    }

    render() {
        return(
            <>
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
            </>
        );
    }
}

export default BeginnerHome;