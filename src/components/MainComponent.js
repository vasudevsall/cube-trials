import React, { Component } from 'react';
import { COLORS } from '../shared/colors';
import Cube from './CubeComponent';

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
                <Cube colors = {this.state.colors.filter((color) => color.id === 1)[0]}/>
            </>
        );
    }
}

export default Main;