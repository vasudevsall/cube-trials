import React from 'react';
import { Jumbotron } from 'reactstrap';
import Cube from './CubeComponent';

function HomePage(props) {

        return(
            <>
                <Jumbotron className="bg-secondary">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 align-self-center">
                                <h1>Cube Trials</h1>
                                <p>
                                    Let's go cubing!
                                </p>
                            </div>
                            <div className="d-none d-sm-block col-12 col-sm-6">
                                <img src="images/cube.png" height="350px" alt="Cube" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className = "container homeContainer">
                    <div className = "row">
                        <h3 className="col-12">Lets's dive into some history!</h3>
                        <p className="col-12">
                            The <strong>Rubik's Cube</strong> is a 3-D combination puzzle invented in 1974
                            by Hungarian sculptor and professor of architecture Ernő Rubik. Originally called the Magic Cube,
                            the puzzle was licensed by Rubik to be sold by Ideal Toy Corp. In 1980 via businessman Tibor Laczi
                            and Seven Towns founder Tom Kremer. Rubik's Cube won the 1980 German Game of the Year special award for Best Puzzle.
                            As of January 2009, 350 million cubes had been sold worldwide, making it the world's top-selling puzzle game.
                            It is widely considered to be the world's best-selling toy
                        </p>
                    </div>
                    <div className="row">
                        <h3 className="col-12">Cube competitions today:</h3>
                        <p className="col-12">
                            Speedcubers compete for the fastest times in various categories. 
                            Since 2003, the <a href="https://www.worldcubeassociation.org/">World Cube Association</a>, 
                            the international governing body of Rubik's Cube, 
                            has organised competitions worldwide and recognises world records.
                        </p>
                    </div>
                    <div className="row">
                        <h3 className="col-12">Sample Rubik's Cube:</h3>
                        <p className="col-12">
                            A 3x3 Rubik's cube is quite similar to this one (It's just playable!):
                        </p>
                    </div>
                    <Cube cubeId="id1"
                        cubeClasses="cube"
                        cubeTitle='front'
                        colors={props.cubeData}
                    />
                </div>
            </>
        );
}

export default HomePage;