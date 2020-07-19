import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import BeginnerNav from './BeginnerNavComponent';
import BeginnerHome from './BeginnerHome';
import Moves from './BeginnerMovesComponent';

class BeginnerMain extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggleSideBar: false
        };
    }

    render() {
        return(
            <>
                <Jumbotron className="beginner-jumbo bg-secondary">
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
                <div className='beginner-main-div'>
                    <BeginnerNav url={this.props.url} />
                    <div className="beginner-div">
                        <Switch>
                            <Route exact path={this.props.path}>
                                <BeginnerHome />
                            </Route>
                            <Route path={`${this.props.path}/beginner-basics`} >
                                <BeginnerHome />
                            </Route>
                            <Route path={`${this.props.path}/basic-moves`}>
                                <Moves />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

function Beginner(props) {
    let { path, url } = useRouteMatch();
    return(
        <BeginnerMain path={path} url={url} />
    );
}

export default Beginner;