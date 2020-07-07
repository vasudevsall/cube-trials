import React, { Component } from 'react';
import { COLORS } from '../shared/colors';
import { TUTORIALS } from '../shared/tutorials';
import TutePage from './TuteComponent';
import Header from './HeaderComponent';
import { HomePage } from './HomeComponent';
import { Switch, Redirect, Route } from 'react-router-dom';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS,
            tutorials: TUTORIALS
        };
    }

    render(){
        return(
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <HomePage cubeData={this.state.colors.filter((color) => color.id === 1)[0]}/> } />
                    <Route path="/tutorial" component={() => <TutePage colors={this.state.colors} tutorials={this.state.tutorials}/> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default Main;