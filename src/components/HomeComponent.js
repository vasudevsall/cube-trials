import React from 'react';
import { Jumbotron } from 'reactstrap';
import Cube from './CubeComponent';
import CubeThree from './CubeThreeComponent';
import { Link } from 'react-router-dom';

function HomeCard(props) {
    let conditionalLink;
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
        <div className='home-card mx-auto my-4'>
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
                <Jumbotron className="bg-secondary home-jumbo">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6 align-self-center text-center">
                                <h1>Cube Trials</h1>
                                <div className={'typewriter'}>
                                    <div className={'typewriter-text'}>
                                        Let's go cubing!
                                    </div>
                                </div>
                            </div>
                            <div className="d-none d-md-block col-12 col-md-6 home-cube">
                                <CubeThree cubeData = {props.threeData} id={props.threeData.id} height='350px' />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className={'fluid-container homeContainer'}>
                    <div className = "container">
                        <div className='row mb-5'>
                            <HomeCard outerLink={false}
                                image={process.env.PUBLIC_URL + "/images/cube-5-nb.png"}
                                title="Beginner's Tutorial"
                                toLink='/tutorial/1'
                            />
                            <HomeCard outerLink={true}
                                image={process.env.PUBLIC_URL + "/images/cube-7.png"}
                                title="Virtual Cube"
                                toLink='https://rubik-cube.netlify.app/'
                            />
                            <HomeCard outerLink={false}
                                image={process.env.PUBLIC_URL + "/images/cube-3.png"}
                                title="All Tutorials"
                                toLink='/tutorial'
                            />
                        </div>
                        <div className='row'>
                            <div className='col-12 mt-5'>
                                <h3>Home</h3>
                                <hr/>
                            </div>
                        </div>
                        <div className = "row mt-4 mb-4">
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
                        <div className="row mt-4 mb-4">
                            <h3 className="col-12">Cube competitions today:</h3>
                            <p className="col-12">
                                Speedcubers compete for the fastest times in various categories.
                                Since 2003, the <a href="https://www.worldcubeassociation.org/">World Cube Association</a>,
                                the international governing body of Rubik's Cube,
                                has organised competitions worldwide and recognises world records.
                            </p>
                        </div>
                        <div className="row mt-4 mb-4">
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
                </div>
            </>
        );
}

export default HomePage;