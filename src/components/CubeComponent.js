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
                <div className="d-inline-block d-md-block radio-container">
                    <input onChange={this.handleChange}
                     defaultChecked={isFront} value={faceName} type = "radio" id = {`radio-${faceName}`} name="selectFace" />
                    <label className="mr-2" htmlFor={`radio-${faceName}`}>
                        <span className="d-none d-md-inline-block fa fa-cube"></span> 
                        {faceName.capitalize()}
                    </label>
                </div>
            );
        });

        return(
            <div className = "container cube-div mb-2">
                <div className = "row">
                    <div className="col-sm-7">
                        <div className="scene">
                            <div className={this.state.cubeClasses}>
                                {renderFaces}
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-sm-none col mt-5"></div>
                    <div className="col-sm-4">
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