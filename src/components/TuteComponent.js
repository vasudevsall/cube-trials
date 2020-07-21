import React from 'react';
import { Jumbotron } from 'reactstrap';
import CustomCard from './CustomCardComponent';

function TutePage(props) {

    const renderCards = props.tutorials.map((card) => {
        return(
            <CustomCard key={card.id} details={card} scrollTop={props.scrollTop} />
        );
    });

    return(
        <>
            <Jumbotron className="bg-secondary">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6 align-self-center">
                            <h1>Tutorials</h1>
                            <p>
                                Yay! Let's Learn!
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 d-none d-sm-block">
                            <img src={process.env.PUBLIC_URL + "/images/cube-2.png"} height="350px" alt="Cube" />
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="fluid-container">
                <div className="row justify-content-center">
                    {renderCards}
                </div>
            </div>
        </>
    );
}

export default TutePage;