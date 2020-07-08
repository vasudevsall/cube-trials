import React from 'react';

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

function Capatilize(face) {
    var name = face.charAt(0).toUpperCase() + face.slice(1);
    return name;
}

function Cube(props){

        const faceKeys = Object.keys(props.colors.faces);
        const renderFaces = faceKeys.map((faceName) => {
            return(
                <CubeFace key={`${props.colors.id}-${faceName}`}
                    id={props.colors.id} face = {faceName} colors= {props.colors.faces[faceName]} />
            );
        });

        const renderLabels = faceKeys.map((faceName) => {
            return(
                <button key={`${props.cubeId}-${faceName}-labe`}
                    value = {faceName}
                    onClick={props.onClick} className={`d-inline-block d-md-block btn btn-primary button-${faceName}`}
                >
                    <span className="fa fa-cube"></span> {Capatilize(faceName)}
                </button>
            );
        });

        return(
            <div className = "container cube-div mb-2">
                <div className = "row">
                    <div className="col-sm-7">
                        <div className="scene">
                            <div className={props.cubeClasses}>
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

export default Cube;