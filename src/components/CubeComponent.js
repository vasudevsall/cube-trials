import React, { Component } from 'react';

export const CubeFace = (props) => {
    var i = 0;
    const colors = props.colors.map((color) => {
        i = i+1;
        return(
            <div key={`${props.id}-${props.face}-${i}`} className="grid-item" style={{backgroundColor: color}}></div>
        );
    });

    return (
        <div className={`cube-face cube-face-${props.face}`}>
            {colors}
        </div>
    );
}

function Capitalize(face) {
    var name = face.charAt(0).toUpperCase() + face.slice(1);
    return name;
}

class Cube extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cubeClasses: this.props.cubeClasses,
            cubeTitle: this.props.cubeTitle
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        var target = event.target;
        this.setState({
            cubeClasses: `cube cube-${target.value}`,
            cubeTitle: target.value
        });
    }


    render() {
        const faceKeys = Object.keys(this.props.colors.faces);
        const renderFaces = faceKeys.map((faceName) => {
            return(
                <CubeFace key={`${this.props.colors.id}-${faceName}`}
                    id={this.props.colors.id} face = {faceName} colors= {this.props.colors.faces[faceName]} />
            );
        });

        const renderLabels = faceKeys.map((faceName) => {
            return(
                <button key={`${this.props.cubeId}-${faceName}-labe`}
                    value = {faceName}
                    onClick={this.handleButtonClick} className={`d-inline-block d-md-block btn button-${faceName}`}
                >
                    {Capitalize(faceName)}
                </button>
            );
        });

        return(
            <div className = "container cube-div mb-2">
                <div className = "row">
                    <div className="cube-head col-12 text-center mb-3">
                        <h2>Current Face: {Capitalize(this.state.cubeTitle)}</h2>
                    </div>
                    <div className="col-sm-7">
                        <div className="scene" style={{height: this.props.height, width: this.props.width}}>
                            <div className={this.state.cubeClasses}>
                                {renderFaces}
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-sm-none col mt-5"></div>
                    <div className="col-sm-4">
                        <div className="d-none d-md-inline-block btn-group-vertical">
                            {renderLabels}
                        </div>
                        <div className="d-block d-md-none btn-group">
                            {renderLabels}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cube;