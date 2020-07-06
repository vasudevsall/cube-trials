import React, { Component } from 'react';

export const CubeFace = (props) => {
    const colors = props.colors.map((color) => {
        return(
            <div className="grid-item" style={{backgroundColor: color}}></div>
        );
    });

    return (
        <div className={`cube-face cube-face-${props.face}`}>
            {colors}
        </div>
    );
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Cube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cubeClasses : "cube"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var target = event.target;
        this.setState({
            cubeClasses: `cube cube-${target.value}`
        });
    }

    render() {

        const faceKeys = Object.keys(this.props.colors.faces);
        const renderFaces = faceKeys.map((faceName) => {
            return(
                <CubeFace face = {faceName} colors= {this.props.colors.faces[faceName]} />
            );
        });

        const renderLabels = faceKeys.map((faceName) => {
            var isFront = (faceName === 'front')?true:false;

            return(
                <div className="radio-container">
                    <input onChange={this.handleChange}
                     defaultChecked={isFront} value={faceName} type = "radio" id = {`radio-${faceName}`} name="selectFace" />
                    <label htmlFor={`radio-${faceName}`}>{faceName.capitalize()}</label>
                    <span className="fa fa-cube"></span>
                </div>
            );
        });

        return(
            <div className = "container cube-div">
                <div className = "row">
                    <div className="col-sm-7">
                        <div className="scene">
                            <div className={this.state.cubeClasses}>
                                {renderFaces}
                            </div>
                        </div>
                    </div>
                    <div className="offset-1 col-sm-4">
                        <div className="form-box">
                            {renderLabels}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cube;