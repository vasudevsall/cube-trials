import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CUBE_STATE } from '../shared/cubeState';

class CubeThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moves: this.props.cubeData.moves,
            addControls: this.props.cubeData.addControls,
            backColor: this.props.cubeData.backColor,
            loop: this.props.cubeData.loop,
            waitTime: this.props.cubeData.waitTime,
            resetFaces: this.props.cubeData.resetFaces,
            initMoves: this.props.cubeData.initMoves
        }
    }

    componentDidMount() {
        var canvasDiv, canvasDivStyle;
        var TH_HEIGHT, TH_WIDTH;

        var scene, camera, renderer;
        var controls;

        var cubeGeometry, cubeMaterial, cubeBorderGeometry ,cube, cubeBorder;
        var cubeArray = [];
        var cubeBorderArray = [];
        var cubeState = CUBE_STATE;

        var cubeGroup;
        var vectorX, vectorY, vectorZ;

        var frontArr, backArr, rightArr, leftArr, topArr, downArr;

        var doRotation = false, rotationVar = 0, rotationVector, rotationCoeff;

        var rotationQueue = [...this.state.moves]; //[1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1];
        // 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
        var originalQueue = [...this.state.moves];
        var initMoves = this.state.initMoves;
        var initState = CUBE_STATE;

        var addControls = this.state.addControls, backColor = this.state.backColor, loop = this.state.loop;
        var resetFaces = this.state.resetFaces;
        var waitTime = this.state.waitTime;

        function createCube() {
            /* Create cube */

            var positionX = -2;
            var positionY = -2;
            var positionZ = -2;
            var index = 0;

            for(var i=0; i<3; i++) {
                positionX = -2;
                positionZ += 1;
                for(var j=0; j<3; j++) {
                    positionX += 1;
                    positionY = -2;
                    for(var k=0; k<3; k++){
                        positionY += 1;
                        cubeGeometry = new THREE.BoxGeometry(.88, .88, .88);

                        cubeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, vertexColors: true});
                        cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                        cube.position.set(positionX, positionY, positionZ);
                        scene.add(cube);

                        cubeBorderGeometry = new THREE.EdgesGeometry( cube.geometry );
                        cubeBorder = new THREE.LineSegments(cubeBorderGeometry, new THREE.LineBasicMaterial({color: 0x0000, linewidth: 3}));
                        cubeBorder.position.set(positionX, positionY, positionZ);
                        scene.add(cubeBorder);

                        cubeArray.push(cube);
                        cubeBorderArray.push(cubeBorder);

                        /* Pushing the index to the required Array */
                        if(positionZ === -1) { // back
                            backArr.push(index);
                        } else if(positionZ === 1) { // front
                            frontArr.push(index);
                        }

                        if(positionX === -1) { // left
                            leftArr.push(index);
                        } else if(positionX === 1) {
                            rightArr.push(index);
                        }

                        if(positionY === -1) { // down
                            downArr.push(index);
                        } else if(positionY === 1) { // top
                            topArr.push(index);
                        }

                        index = index + 1;
                    }
                }
            }
        }

        function rotate(sideArr, rev = true) {
            var retArray = [];
            retArray.push(sideArr[2]);
            retArray.push(sideArr[5]);
            retArray.push(sideArr[8]);
            retArray.push(sideArr[1]);
            retArray.push(sideArr[4]);
            retArray.push(sideArr[7]);
            retArray.push(sideArr[0]);
            retArray.push(sideArr[3]);
            retArray.push(sideArr[6]);
            
            if(rev)
                retArray.reverse();
            
            return retArray;
        }

        /* Function for both right and left rotation */
        function rightRotation(left, rev) {

            /* Initialize a new Group */
            cubeGroup = new THREE.Group();

            var finalArr;
            var tempState = [];

            var initArr = (left)? leftArr:rightArr;
            
            finalArr = rotate(initArr);

            var i;

            for (i=0; i<cubeState.length; i++){
                tempState[i] = cubeState[i].slice();
            }
            if( (!left && !rev) || (left && rev)) {
                finalArr.reverse();
                for(i = 0; i<finalArr.length; i++) {
                    tempState[initArr[i]][0] = cubeState[finalArr[i]][0];
                    tempState[initArr[i]][1] = cubeState[finalArr[i]][1];
                    tempState[initArr[i]][2] = cubeState[finalArr[i]][4];
                    tempState[initArr[i]][3] = cubeState[finalArr[i]][5];
                    tempState[initArr[i]][4] = cubeState[finalArr[i]][3];
                    tempState[initArr[i]][5] = cubeState[finalArr[i]][2];

                    /* Add to group */
                    cubeGroup.add(cubeArray[initArr[i]]);
                    cubeGroup.add(cubeBorderArray[initArr[i]]);
                }
                rotationCoeff = -0.1;
            } else {
                for(i = 0; i<finalArr.length; i++) {
                    tempState[initArr[i]][0] = cubeState[finalArr[i]][0];
                    tempState[initArr[i]][1] = cubeState[finalArr[i]][1];
                    tempState[initArr[i]][2] = cubeState[finalArr[i]][5];
                    tempState[initArr[i]][3] = cubeState[finalArr[i]][4];
                    tempState[initArr[i]][4] = cubeState[finalArr[i]][2];
                    tempState[initArr[i]][5] = cubeState[finalArr[i]][3];

                    /* Add to group */
                    cubeGroup.add(cubeArray[initArr[i]]);
                    cubeGroup.add(cubeBorderArray[initArr[i]]);
                }
                rotationCoeff = 0.1;
            }


            rotationVector = vectorX;
            cubeState = tempState;
            scene.add(cubeGroup);

            doRotation = true;
        }

        /* Function for both front and back rotations */
        function frontRotation(back, rev) {

            /* Initialize a new Group */
            cubeGroup = new THREE.Group();

            var finalArr;
            var tempState = [];
            
            var initArr = (back)? backArr:frontArr;

            var i;

            finalArr = rotate(initArr);

            for (i=0; i<cubeState.length; i++){
                tempState[i] = cubeState[i].slice();
            }
            if((!back && !rev) || (back && rev)) {
                for(i = 0; i<finalArr.length; i++) {
                    tempState[initArr[i]][0] = cubeState[finalArr[i]][2];
                    tempState[initArr[i]][1] = cubeState[finalArr[i]][3];
                    tempState[initArr[i]][2] = cubeState[finalArr[i]][1];
                    tempState[initArr[i]][3] = cubeState[finalArr[i]][0];
                    tempState[initArr[i]][4] = cubeState[finalArr[i]][4];
                    tempState[initArr[i]][5] = cubeState[finalArr[i]][5];

                    /* Add to group */
                    cubeGroup.add(cubeArray[initArr[i]]);
                    cubeGroup.add(cubeBorderArray[initArr[i]]);
                }
                rotationCoeff = -0.1;
            } else {
                finalArr.reverse();
                for(i = 0; i<finalArr.length; i++) {
                    tempState[initArr[i]][0] = cubeState[finalArr[i]][3];
                    tempState[initArr[i]][1] = cubeState[finalArr[i]][2];
                    tempState[initArr[i]][2] = cubeState[finalArr[i]][0];
                    tempState[initArr[i]][3] = cubeState[finalArr[i]][1];
                    tempState[initArr[i]][4] = cubeState[finalArr[i]][4];
                    tempState[initArr[i]][5] = cubeState[finalArr[i]][5];

                    /* Add to group */
                    cubeGroup.add(cubeArray[initArr[i]]);
                    cubeGroup.add(cubeBorderArray[initArr[i]]);
                }
                rotationCoeff = 0.1;
            }


            rotationVector = vectorZ;
            cubeState = tempState;
            scene.add(cubeGroup);
            doRotation = true;
        }

        /* Function for handling both top and down rotations */
        function topRotation(down, rev) {

            /* Initialize a new Group */
            cubeGroup = new THREE.Group();

            var finalArr;
            var tempState = [];
            
            var initArr = (down)? downArr:topArr;

            var i;

            finalArr = rotate(initArr);

            for (i=0; i<cubeState.length; i++){
                tempState[i] = cubeState[i].slice();
            }
            if((!down && !rev) || (down && rev)) {
                for(i = 0; i<finalArr.length; i++) {
                    tempState[initArr[i]][0] = cubeState[finalArr[i]][5];
                    tempState[initArr[i]][1] = cubeState[finalArr[i]][4];
                    tempState[initArr[i]][2] = cubeState[finalArr[i]][2];
                    tempState[initArr[i]][3] = cubeState[finalArr[i]][3];
                    tempState[initArr[i]][4] = cubeState[finalArr[i]][0];
                    tempState[initArr[i]][5] = cubeState[finalArr[i]][1];

                    /* Add to group */
                    cubeGroup.add(cubeArray[initArr[i]]);
                    cubeGroup.add(cubeBorderArray[initArr[i]]);
                }
                rotationCoeff = -0.1;
            } else {
                finalArr.reverse();
                for(i = 0; i<finalArr.length; i++) {
                    tempState[initArr[i]][0] = cubeState[finalArr[i]][4];
                    tempState[initArr[i]][1] = cubeState[finalArr[i]][5];
                    tempState[initArr[i]][2] = cubeState[finalArr[i]][2];
                    tempState[initArr[i]][3] = cubeState[finalArr[i]][3];
                    tempState[initArr[i]][4] = cubeState[finalArr[i]][1];
                    tempState[initArr[i]][5] = cubeState[finalArr[i]][0];

                    /* Add to group */
                    cubeGroup.add(cubeArray[initArr[i]]);
                    cubeGroup.add(cubeBorderArray[initArr[i]]);
                }
                rotationCoeff = 0.1;
            }


            rotationVector = vectorY;
            cubeState = tempState;
            scene.add(cubeGroup);
            doRotation = true;
        }

        function giveFaceColors() {
            for(var i=0; i<cubeArray.length; i++) {
                var thisCube = cubeArray[i];
                var faces = thisCube.geometry.faces;

                for(var x=0; x<6; x++) {
                    faces[2*x].color.setHex(cubeState[i][x]);
                    faces[2*x+1].color.setHex(cubeState[i][x]);
                }

                thisCube.geometry.elementsNeedUpdate = true;
            }
        }

        /* When browser window is resized */
        function resizeWindow(){
            // This function resizes canvas size every time window size if resized

            TH_HEIGHT = parseInt(canvasDivStyle.getPropertyValue("height"), 10);
            TH_WIDTH = parseInt(canvasDivStyle.getPropertyValue("width"), 10);

            renderer.setSize(TH_WIDTH,TH_HEIGHT);
            camera.aspect = TH_WIDTH/TH_HEIGHT;

            camera.updateProjectionMatrix();
        }

        function constructor(divId) {
            /* Position to add canvas */
            canvasDiv = document.getElementById(divId);
            canvasDivStyle = window.getComputedStyle(canvasDiv);
            TH_HEIGHT = parseInt(canvasDivStyle.getPropertyValue("height"), 10);
            TH_WIDTH = parseInt(canvasDivStyle.getPropertyValue("width"), 10);
            
            /* Setting up scene, camera and renderer*/
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, TH_WIDTH/TH_HEIGHT, 0.1, 500);
            camera.position.set(-3, 2, 6);
            renderer = new THREE.WebGLRenderer({antialias: true, precision: 'highp'});
            renderer.setClearColor(backColor);
            renderer.setSize(TH_WIDTH, TH_HEIGHT);

            /* Adding controls to the scene */
            if(addControls)
                controls = new OrbitControls( camera, canvasDiv);

            /* Adding Light to the Scene */
            scene.add(new THREE.AmbientLight(0xffffff));

            // * Adding three vectirs to support
            vectorX = new THREE.Vector3(1, 0, 0).normalize();
            vectorY = new THREE.Vector3(0, 1, 0).normalize();
            vectorZ = new THREE.Vector3(0, 0, 1).normalize();

            /* Initializing all the arrays */
            frontArr = [];
            backArr = [];
            rightArr = [];
            leftArr = [];
            topArr = [];
            downArr = [];

            /* Initialize the cubeGroup and add it to the scene */
            cubeGroup = new THREE.Group();
            scene.add(cubeGroup);

            /* Create Rubik's cube */
            createCube();

            /* Do some initial moves if any and save state */
            if(initMoves !== null) {
                var initTrue = true;
                while(initTrue) {
                    var nextFunc = nextRotation(true);
                    nextFunc();
                    if(initMoves.length === 0) {
                        initTrue = false;
                        break;
                    }
                }
                initState = cubeState;
            }

            giveFaceColors();

            /* Add event listener to window */
            window.addEventListener('resize', resizeWindow);

            canvasDiv.appendChild(renderer.domElement);
            render();
        }

        function addAgain() {
            rotationQueue = [...originalQueue];
        }

        function resetCube() {
            /* Clean the rotation queue */
            rotationQueue.length = 0;
        
            // cubeState = CUBE_STATE;
            cubeState = initState;
            giveFaceColors();
        
            controls.reset();
        }

        function nextRotation(init = false) {
            var next;
            // console.log(rotationQueue);

            if(!init) {
                next = rotationQueue.shift()
            } else if(initMoves !== null) {
                next = initMoves.shift()
            }

            switch(next) {
                case -6:    // Back Prime
                    return (function() {
                        frontRotation(true, true);
                    });
                case -5:    // Front Prime
                    return (function(){
                        frontRotation(false, true);
                    });
                case -4:    // Bottom Prime
                    return (function(){
                        topRotation(true, true);
                    });
                case -3:    // Top Prime
                    return (function() {
                        topRotation(false, true);
                    });
                case -2:    // Left Prime
                    return (function(){
                        rightRotation(true, true);
                    });
                case -1:    // Right Prime
                    return (function(){ 
                        rightRotation(false, true);
                    });
                case 1:     // Right
                    return (function(){
                        rightRotation(false, false);
                    });
                case 2:     // Left
                    return (function(){
                        rightRotation(true, false);
                    });
                case 3:     // Top
                    return (function(){
                        topRotation(false, false);
                    });
                case 4:     // Bottom
                    return (function(){
                        topRotation(true, false);
                    });
                case 5:     // Front
                    return (function(){
                        frontRotation(false, false);
                    });
                case 6:     // Back
                    return (function() {
                        frontRotation(true, false);
                    });
                default:
                    if(loop && !init) {
                        loop = !loop;
                        setTimeout(function(){
                            if(resetFaces)
                                resetCube();
                            addAgain();
                            loop = !loop;
                        }, waitTime);
                    }
                    return null;
            }
        }

        function render() {
            requestAnimationFrame(render);

            /* Rotatte the Given face and then perform required actions */
            if(doRotation && rotationVar < (Math.PI/2.0)) {
                rotationVar = rotationVar + 0.1;
                cubeGroup.rotateOnAxis(rotationVector, rotationCoeff);
            } else {
                if(doRotation) {
                    cubeGroup.rotateOnAxis(rotationVector, ((rotationCoeff > 0) ? -1.6: 1.6));
                    giveFaceColors();
                    doRotation = false;
                }
                var nextFunc = nextRotation();
                    if(nextFunc !== null){
                        nextFunc();
                    }
                rotationVar = 0.0;
            }

            /* Orbit Controls update and rendering camera  */
            if(addControls)
                controls.update();
            renderer.render(scene, camera);
        }

        constructor(`canvas-div-${this.props.id}`);
    }

    render() {
        return(
            <div id={`canvas-div-${this.props.id}`} style={{height: this.props.height}} className="canvasDiv">
            </div>
        );
    }
}

export default CubeThree;