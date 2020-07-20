import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import BeginnerNav from './BeginnerNavComponent';
import BeginnerHome from './BeginnerHome';
import {Moves, PrimeMoves, AlgorithmExample} from './BeginnerMovesComponent';
import { FixCross } from './FirstLayerComponent';
import { CUBE_DATA } from '../../shared/cubeData';
import { COLORS } from '../../shared/colors';

class BeginnerMain extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggleSideBar: false,
            cubeData: CUBE_DATA,
            colors: COLORS
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
                                <BeginnerHome url={this.props.url} />
                            </Route>
                            <Route path={`${this.props.path}/beginner-basics`} >
                                <BeginnerHome url={this.props.url} />
                            </Route>
                            <Route path={`${this.props.path}/basic-moves`}>
                                <Moves cubeData={this.state.cubeData} url={this.props.url} />
                            </Route>
                            <Route path={`${this.props.path}/basic-moves-prime`}>
                                <PrimeMoves cubeData={this.state.cubeData} url={this.props.url} />
                            </Route>
                            <Route path={`${this.props.path}/basic-moves-example`}>
                                <AlgorithmExample cubeData={this.state.cubeData} url={this.props.url} />
                            </Route>
                            <Route path={`${this.props.path}/first-layer`}>
                                <FixCross cubeData={this.state.cubeData} url={this.props.url} colors={this.state.colors} />
                            </Route>
                            <Redirect to={`${this.props.path}/beginner-basics`}/>
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