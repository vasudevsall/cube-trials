import React, { Component } from 'react';
import { COLORS } from '../shared/colors';
import { Jumbotron } from 'reactstrap';
import Cube from './CubeComponent'; 

class Beginner extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS,
            cubeClasses: {
                'id1': 'cube',
                'id2': 'cube',
                'id3': 'cube',
                'id4': 'cube'
            },
            cubeTitles: {
                'id1': 'front',
                'id2': 'front',
                'id3': 'front',
                'id4': 'front'
            }
        };
        this.handleCubeClick = this.handleCubeClick.bind(this);
    }

    handleCubeClick(event, id) {
        var target = event.target;
        console.log(target.value + " " +id);
        this.setState({
            cubeClasses: {...this.state.cubeClasses, [id]: `cube cube-${target.value}`},
            cubeTitles: {...this.state.cubeTitles, [id]: target.value}
        });
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
                            <h2 className="col-12">The Basics:</h2>
                            <p className="col-12">
                                Basics are the very important in learning anything. So, let's cover all the basics.
                            </p>
                        </div>
                        <div className="row">
                            <h5 className="col-12">The Rubik's Cube:</h5>
                            <p className="col-12">
                                A 3 x 3 Rubik's have a total of 6 faces, each face has 9 colored tiles.
                                A cube is said to be in a solved state when all the faces have a single color.
                                So, a solved cube looks something like this:
                            </p>
                        </div>
                    </div>
                    <Cube key="id1" cubeId="id1"
                        onClick= {(e)=> {this.handleCubeClick(e, 'id1')}}
                        cubeClasses={this.state.cubeClasses.id1}
                        cubeTitle={this.state.cubeTitles.id1}
                        colors={this.state.colors.filter((color) => color.id === 1)[0]}
                    />
                    <div className="container">
                        <div className="row">
                            <h5 className="col-12">The center pieces:</h5>
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
                    <Cube key="id2" cubeId="id2" 
                        onClick= {(e)=> {this.handleCubeClick(e, 'id2')}}
                        cubeClasses={this.state.cubeClasses.id2}
                        cubeTitle={this.state.cubeTitles.id2}
                        colors={this.state.colors.filter((color) => color.id === 2)[0]}
                    />
                    <div className="container">
                        <div className="row">
                            <h5 className="col-12">The corner pieces:</h5>
                            <p className="col-12">
                                These are the pieces that form the corners or the vertices of the cube. These pieces have
                                three faces and one color on each face. Thus, they have a total of three colors each.
                                The cube below shows all the corner pieces of the cube:
                            </p>
                        </div>
                    </div>
                    <Cube key="id3" cubeId="id3"
                        onClick= {(e) => {this.handleCubeClick(e, 'id3')}}
                        cubeClasses={this.state.cubeClasses.id3}
                        cubeTitle={this.state.cubeTitles.id3}
                        colors={this.state.colors.filter((color) => color.id === 3)[0]}
                    />
                    <div className="container">
                        <div className="row">
                            <h5 className="col-12">The Edge pieces:</h5>
                            <p className="col-12">
                                These are the pieces that lie between two corners and form the edges of the cube.
                                Each of these has two faces containing two different colors. The cube below shows
                                all the edge pieces:
                            </p>
                        </div>
                    </div>
                    <Cube key="id4" cubeId="id4"
                        onClick= {(e) => {this.handleCubeClick(e, 'id4')}}
                        cubeClasses={this.state.cubeClasses.id4}
                        cubeTitle={this.state.cubeTitles.id4}
                        colors={this.state.colors.filter((color) => color.id === 4)[0]}
                    />
                </div>
            </>
        );
    }
}

export default Beginner;