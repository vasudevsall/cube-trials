import React, { Component } from 'react';
import * as THREE from 'three';
import * as TweakPane from 'tweakpane';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CUBE_STATE, CUBE_STATE_CROSS, CUBE_STATE_FIRST_CORNERS } from '../shared/cubeState';

class CubeThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        var canvasDiv, canvasDivStyle;
        var guiDiv;
        var TH_HEIGHT, TH_WIDTH;

        var scene, camera, renderer;
        var controls;

        var cubeGeometry, cubeMaterial, cubeBorderGeometry ,cube, cubeBorder;
        var cubeArray = [];
        var cubeBorderArray = [];
        var cubeState;

        switch(this.props.cubeState) {
            case 'normal':
                cubeState = CUBE_STATE;
                break;
            case 'first_cross':
                cubeState = CUBE_STATE_CROSS;
                break;
            case 'first_corners':
                cubeState = CUBE_STATE_FIRST_CORNERS;
                break;
            default:
                cubeState = CUBE_STATE;
        }

        var cubeGroup;
        var vectorX, vectorY, vectorZ;

        var frontArr, backArr, rightArr, leftArr, topArr, downArr;

        var doRotation = false, rotationVar = 0, rotationVector, rotationCoeff;

        var rotationQueue = [...this.props.cubeData.moves]; //[1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1];
        // 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
        var originalQueue = [...this.props.cubeData.moves];
        var initMoves = [...this.props.cubeData.initMoves];
        var initState = CUBE_STATE;

        var addControls = this.props.cubeData.addControls, backColor = this.props.cubeData.backColor, loop = this.props.cubeData.loop;
        var resetFaces = this.props.cubeData.resetFaces;
        var waitTime = this.props.cubeData.waitTime;
        var clearing = false;
        var cubeControls = this.props.cubeData.cubeControls;
        /**
         * This variable changes the state of the rotation of the cube
         * false means cube is in play state
         * true means cube is in paused state
        */
        var cubePaused = this.props.cubeData.initPaused;

        /* Creating a label to add when cube is paused */
        var lbl = document.createElement('label');
        lbl.innerHTML = 'Paused';
        lbl.classList.add('three-cube-label');
        var addedOnce = false;

        /* Controls using dat.gui */
        var guiControls = {
            Speed : 0.1
        }

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
                        cube.castShadow = true;
                        scene.add(cube);

                        cubeBorderGeometry = new THREE.EdgesGeometry( cube.geometry );
                        cubeBorder = new THREE.LineSegments(cubeBorderGeometry, new THREE.LineBasicMaterial({color: 0x0000, linewidth: 3}));
                        cubeBorder.position.set(positionX, positionY, positionZ);
                        cubeBorder.castShadow = true;
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
                rotationCoeff = -1 * guiControls.Speed;
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
                rotationCoeff = 1 * guiControls.Speed;
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
                rotationCoeff = -1 * guiControls.Speed;
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
                rotationCoeff = 1 * guiControls.Speed;
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
                rotationCoeff = -1 * guiControls.Speed;
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
                rotationCoeff = 1 * guiControls.Speed;
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

        function constructor(divId, guiID) {
            /* Position to add canvas */
            canvasDiv = document.getElementById(divId);
            guiDiv = document.getElementById(guiID);
            canvasDivStyle = window.getComputedStyle(canvasDiv);
            TH_HEIGHT = parseInt(canvasDivStyle.getPropertyValue("height"), 10);
            TH_WIDTH = parseInt(canvasDivStyle.getPropertyValue("width"), 10);
            
            /* Setting up scene, camera and renderer*/
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(50, TH_WIDTH/TH_HEIGHT, 0.1, 500);
            camera.position.set(-3, 2, 6);
            if(!addControls)
                camera.position.set(-5, 5, 5);
            renderer = new THREE.WebGLRenderer({antialias: true, precision: 'highp'});
            renderer.setClearColor(backColor);
            renderer.setSize(TH_WIDTH, TH_HEIGHT);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            /* Adding controls to the scene */
            if(addControls){
                controls = new OrbitControls( camera, canvasDiv);
                controls.enableZoom = false;
            }
            else
                camera.lookAt(0, 0, 0);

            /* Adding Light to the Scene */
            if(addControls)
                scene.add(new THREE.AmbientLight(0xffffff));
            else {
                var spotLight = new THREE.SpotLight(0xffffff);
                spotLight.position.set(-40, 40, 40);
                scene.add(spotLight);

                spotLight = new THREE.SpotLight(0xffffff);
                spotLight.position.set(-10, 30, 10);
                spotLight.castShadow = true;
                spotLight.distance = 80;
                scene.add(spotLight);
            }

            // * Adding three vectirs to support
            vectorX = new THREE.Vector3(1, 0, 0).normalize();
            vectorY = new THREE.Vector3(0, 1, 0).normalize();
            vectorZ = new THREE.Vector3(0, 0, 1).normalize();

            /* Adding plane */
            var planeGeometry = new THREE.PlaneGeometry(20, 20, 20);
            var planeMaterial = new THREE.MeshLambertMaterial({color: backColor});
            var plane = new THREE.Mesh(planeGeometry, planeMaterial);

            plane.rotation.x = -Math.PI / 2;
            plane.receiveShadow = true;

            plane.position.set(0, -10, 0);

            scene.add(plane);

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
                    if(nextFunc !== null)
                        nextFunc();
                    if(initMoves.length === 0) {
                        initTrue = false;
                        break;
                    }
                }
                initState = cubeState;
            }

            /* Give initial colors to the faces */
            giveFaceColors();

            /* Add TweakPane controls */
            if(cubeControls) {
                const pane = new TweakPane({container: guiDiv});
                console.log(pane);
                const togglePause = pane.addButton({title: 'Play / Pause'});
                togglePause.on('click', function(){
                    cubePaused = !cubePaused;
                });
                pane.addSeparator();
                const f1 = pane.addFolder({
                    title: 'Speed and Camera',
                });
                const speedChange = f1.addInput(guiControls, 'Speed', {
                    options: {
                        Slower: 0.02,
                        Slow: 0.05,
                        Normal: 0.1,
                        Fast: 0.2,
                        Faster: 0.5
                    },
                });
                speedChange.on('change', function(){
                    resetCube(true);
                    guiControls.Speed = parseFloat(guiControls.Speed);
                    f1.expanded = false;
                });

                const cameraBtn = f1.addButton({title: 'Reset Camera'});
                cameraBtn.on('click', function(){
                    controls.reset();
                    f1.expanded = false;
                });
                f1.expanded = false;
            }

            /* Add event listener to window */
            window.addEventListener('resize', resizeWindow);

            canvasDiv.appendChild(renderer.domElement);
            render();
        }

        function addAgain() {
            if(!clearing)
                rotationQueue = [...originalQueue];
        }

        function resetCube(clear = false, callback = null) {
            /* Clean the rotation queue */
            if(clear) {
                clearing = true;
                setTimeout(function(){
                    clearing = false;
                    console.log('okay');
                }, 500);
            }
            rotationQueue.length = 0;
        
            cubeState = CUBE_STATE;
            cubeState = initState;
            giveFaceColors();

            // if(addControls)
            //     controls.reset();
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
                        /** If rotation queue is empty reset, show final result for some time
                         * then, again show the init position, and then start animation again
                         */
                        if(resetFaces) {
                            setTimeout(function() {
                                resetCube();
                            }, (waitTime / 3));
                        }
                        setTimeout(function(){
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
            if(doRotation && rotationVar < (Math.PI/2.0) && !clearing && !cubePaused) {
                rotationVar = rotationVar + guiControls.Speed;
                cubeGroup.rotateOnAxis(rotationVector, rotationCoeff);
            } else {
                if(doRotation) {
                    cubeGroup.rotateOnAxis(rotationVector, (((rotationCoeff > 0) ? -1: 1) * rotationVar));
                    giveFaceColors();
                    doRotation = false;
                }
                if(!cubePaused) {
                    var nextFunc = nextRotation();
                        if(nextFunc !== null){
                            nextFunc();
                        }
                }
                rotationVar = 0.0;
            }

            /* If the cube is paused add a label on the top */
            if(cubePaused && !addedOnce) {
                canvasDiv.appendChild(lbl);
                addedOnce = true;
            } else if(!cubePaused){
                lbl.remove();
                addedOnce = false;
            }

            /* Orbit Controls update and rendering camera  */
            if(addControls)
                controls.update();
            renderer.render(scene, camera);
        }

        constructor(`canvas-div-${this.props.id}`, `canvas-child-${this.props.id}`);
        this.setState({
            mounted: true
        });
    }

    render() {
        return(
            <div className='canvas-capsule'>
                <div id={`canvas-div-${this.props.id}`} style={{height: this.props.height}} className="canvasDiv">
                </div>
                <div id={`canvas-child-${this.props.id}`} className='gui-div clearfix'></div>
            </div>
        );
    }
}

export default CubeThree;