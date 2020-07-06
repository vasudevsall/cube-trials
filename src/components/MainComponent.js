import React, { Component } from 'react';
import { COLORS } from '../shared/colors';
import Cube from './CubeComponent';
import Header from './HeaderComponent';
import { HomePage } from './HomeComponent';
import { Switch, Redirect, Route } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS
        };
    }

    render(){
        return(
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <HomePage cubeData={this.state.colors.filter((color) => color.id === 1)[0]}/> } />
                    <Route path="/tutorial" component={() => <Cube colors = {this.state.colors.filter((color) => color.id === 1)[0]}/> } />
                    <Redirect to="/home" />
                </Switch>
            </>
        );
    }
}

export default Main;