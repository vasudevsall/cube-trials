import React, { Component } from 'react';
import {CUBE_DATA} from "../../shared/cubeData";
import {COLORS} from "../../shared/colors";
import {Jumbotron} from "reactstrap";
import TwoLookNav from "./TwoLookNavComponent";
import { Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import BeginnerHome from "../Beginner Components/BeginnerHome";
import {AlgorithmExample, Moves, PrimeMoves} from "../Beginner Components/BeginnerMovesComponent";
import {FixCorners, FixCross} from "../Beginner Components/FirstLayerComponent";
import {SecondLayer} from "../Beginner Components/SecondLayerComponent";
import {LastCross} from "../Beginner Components/LastLayerComponents";
import {TwoOLL, TwoOLLAnimations} from "./TwoOllComponent";
import {TwoHome} from "./TwoLookHomeComponent";
import {TwoEdges, TwoPLL} from "./TwoPLLComponent";

class TwoLookMain extends Component{

    constructor(props) {
        super(props);
        this.state = {
            toggleSideBar: false,
            cubeData: CUBE_DATA,
            colors: COLORS
        };

        this.handleScrollTop = this.handleScrollTop.bind(this);
    }

    handleScrollTop(event) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        return(
            <>
                <Jumbotron className="beginner-jumbo bg-secondary">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 align-self-center">
                                <h1>Rubik's Cube</h1>
                                <h4><em>Two Look OLL and PLL</em></h4>
                            </div>
                            <div className="col-12 col-sm-6 d-none d-sm-block">
                                <img src={process.env.PUBLIC_URL + "/images/cube-7.png"} height="350px" alt="Rubik's Cube" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className='beginner-main-div'>
                    <TwoLookNav url={this.props.url} scrollTop = {this.handleScrollTop} />
                    <div className='beginner-div'>
                        <Switch>
                            <Route exact path={this.props.path}>
                                <TwoHome cubeData={this.state.cubeData} url={this.props.url}
                                        colors={this.state.colors}
                                        scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/beginner-basics`} >
                                <BeginnerHome url={this.props.url} scrollTop = {this.handleScrollTop} />
                            </Route>
                            <Route path={`${this.props.path}/basic-moves`}>
                                <Moves cubeData={this.state.cubeData} url={this.props.url} scrollTop = {this.handleScrollTop} />
                            </Route>
                            <Route path={`${this.props.path}/basic-moves-prime`}>
                                <PrimeMoves cubeData={this.state.cubeData} url={this.props.url} scrollTop={this.handleScrollTop} />
                            </Route>
                            <Route path={`${this.props.path}/basic-moves-example`}>
                                <AlgorithmExample cubeData={this.state.cubeData} url={this.props.url}
                                                  scrollTop={this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/first-layer`}>
                                <FixCross cubeData={this.state.cubeData} url={this.props.url}
                                          colors={this.state.colors}
                                          scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/first-layer-corners`}>
                                <FixCorners cubeData={this.state.cubeData} url={this.props.url}
                                            colors={this.state.colors}
                                            scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/second-layer`}>
                                <SecondLayer cubeData={this.state.cubeData} url={this.props.url}
                                             colors={this.state.colors}
                                             scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/last-layer`}>
                                <LastCross cubeData={this.state.cubeData} url={this.props.url}
                                           colors={this.state.colors}
                                           scrollTop = {this.handleScrollTop}
                                           twoOll = {true}
                                />
                            </Route>
                            <Route path={`${this.props.path}/two-oll`}>
                                <TwoOLL cubeData={this.state.cubeData} url={this.props.url}
                                           colors={this.state.colors}
                                           scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/two-oll-animation`}>
                                <TwoOLLAnimations cubeData={this.state.cubeData} url={this.props.url}
                                        colors={this.state.colors}
                                        scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/two-pll`}>
                                <TwoPLL cubeData={this.state.cubeData} url={this.props.url}
                                        colors={this.state.colors}
                                        scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Route path={`${this.props.path}/two-pll-edges`}>
                                <TwoEdges cubeData={this.state.cubeData} url={this.props.url}
                                        colors={this.state.colors}
                                        scrollTop = {this.handleScrollTop}
                                />
                            </Route>
                            <Redirect to={`${this.props.path}/two-oll`}/>
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

function TwoLook(props) {
    let { path, url } = useRouteMatch();
    return(
        <TwoLookMain path={path} url={url} />
    );
}

export default TwoLook;