import React from 'react';
import { Jumbotron } from 'reactstrap';
import Cube from './CubeComponent';
import CubeThree from './CubeThreeComponent';
import { Link } from 'react-router-dom';

function HomeCard(props) {
    var conditionalLink;
    if(props.outerLink) {
        conditionalLink = <a href={props.toLink} className='my-btn'>
                <svg><rect></rect></svg>
                Click Here
            </a>
    } else {
        conditionalLink = <Link to={props.toLink} className='my-btn'>
                <svg><rect></rect></svg>
                Click Here
            </Link>
    }
    return(
        <div className='home-card mr-auto ml-auto mt-2 mb-2'>
            <div className='home-card-img'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='home-title-div'>
                <h3>{props.title}</h3>
            </div>
            <div className='link-button'>
                {conditionalLink}    
            </div>
        </div>
    );
}

function HomePage(props) {

        return(
            <>
                <Jumbotron className="bg-secondary">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6 align-self-center">
                                <h1>Cube Trials</h1>
                                <p>
                                    Let's go cubing!
                                </p>
                            </div>
                            <div className="d-none d-md-block col-12 col-md-6">
                                <CubeThree cubeData = {props.threeData} id={props.threeData.id} height='350px' />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className = "container homeContainer">
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Home</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <HomeCard outerLink={false}
                            image={process.env.PUBLIC_URL + "/images/cube-5-nb.png"}
                            title="Beginner's Tutorial"
                            toLink='/tutorial/1'
                        />
                        <HomeCard outerLink={true}
                            image={process.env.PUBLIC_URL + "/images/cube-4-nb.png"}
                            title="Virtual Cube"
                            toLink='https://rubik-cube.netlify.app/'
                        />
                    </div>
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
                </div>
                <Cube cubeId="id1"
                    cubeClasses="cube"
                    cubeTitle='front'
                    colors={props.cubeData}
                />
                <svg className='hidden-svg'>
                    <filter id="wavy">
                        <feTurbulence x="0" y="0" baseFrequency="0.03" numOctaves='20'
                            seed="2"
                        > 
                        </feTurbulence>
                        <feDisplacementMap in='SourceGraphic' scale='30'/>
                    </filter>
                </svg>

                <svg className='hidden-svg'>
                    <filter id="wavy-text">
                        <feTurbulence x="0" y="0" baseFrequency="0.01" numOctaves='2'
                            seed="2"
                        > 
                        </feTurbulence>
                        <feDisplacementMap in='SourceGraphic' scale='30'/>
                    </filter>
                </svg>
            </>
        );
}

export default HomePage;