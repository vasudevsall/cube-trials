import React, { Component } from 'react';
import * as THREE from 'three';
import * as TweakPane from 'tweakpane';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as STATE from '../shared/cubeState';

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

        var cubeGeometry, cubeMaterial ,cube;
        var cubeArray = [];
        var cubeState;

        switch(this.props.cubeState) {
            case 'normal':
                cubeState = STATE.CUBE_STATE;
                break;
            case 'first_cross':
                cubeState = STATE.CUBE_STATE_CROSS;
                break;
            case 'first_corners':
                cubeState = STATE.CUBE_STATE_FIRST_CORNERS;
                break;
            case 'second_layer':
                cubeState = STATE.CUBE_STATE_SECOND_LAYER;
                break;
            case 'final_layer_cross':
                cubeState = STATE.CUBE_STATE_FINAL_LAYER_CROSS;
                break;
            case 'final_layer_edges':
                cubeState = STATE.CUBE_STATE_FINAL_LAYER_EDGES;
                break;
            case 'two_oll_final_layer':
                cubeState = STATE.CUBE_STATE_TWO_OLL_FINAL;
                break;
            default:
                cubeState = STATE.CUBE_STATE;
        }

        var cubeGroup;
        var vectorX, vectorY, vectorZ;

        var frontArr, backArr, rightArr, leftArr, topArr, downArr;
        // Arrays for middle slices
        var rightMid, frontMid, topMid;

        var doRotation = false, rotationVar = 0, rotationVector, rotationCoeff;

        var rotationQueue = [...this.props.cubeData.moves]; //[1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1];
        // 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
        // Above ten are double layer rotations
        // 11-> r, 12-> l, 13-> u, 14, d, 15-> f, 16-> b
        // -11->r' , -12 -> l' , etc.
        var originalQueue = [...this.props.cubeData.moves];
        var initMoves = [...this.props.cubeData.initMoves];
        var initState = STATE.CUBE_STATE;

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
        const faceIndexArr = [98, 198, 200, 202, 96, 196];

        /* Creating a label to add when cube is paused */
        var lbl = document.createElement('label');
        lbl.innerHTML = 'Paused';
        lbl.classList.add('three-cube-label');
        var addedOnce = false;

        /* Creating another label for next move*/
        var nextLbl = document.createElement('label');
        nextLbl.innerHTML = '';
        nextLbl.classList.add('three-cube-next-label');

        /* Controls using dat.gui */
        var guiControls = {
            Speed : 0.1,
            Steps: false,
            cameraControls: false
        }

        function RoundEdgedBox(width, height, depth, radius, widthSegments, heightSegments, depthSegments, smoothness) {

            width = width || 1;
            height = height || 1;
            depth = depth || 1;
            radius = radius || (Math.min(Math.min(width, height), depth) * .25);
            widthSegments = Math.floor(widthSegments) || 1;
            heightSegments = Math.floor(heightSegments) || 1;
            depthSegments = Math.floor(depthSegments) || 1;
            smoothness = Math.max(3, Math.floor(smoothness) || 3);

            let halfWidth = width * .5 - radius;
            let halfHeight = height * .5 - radius;
            let halfDepth = depth * .5 - radius;

            var geometry = new THREE.Geometry();

            var corner1 = new THREE.SphereGeometry(radius, smoothness, smoothness, 0, Math.PI * .5, 0, Math.PI * .5);
            corner1.translate(-halfWidth, halfHeight, halfDepth);
            var corner2 = new THREE.SphereGeometry(radius, smoothness, smoothness, Math.PI * .5, Math.PI * .5, 0, Math.PI * .5);
            corner2.translate(halfWidth, halfHeight, halfDepth);
            var corner3 = new THREE.SphereGeometry(radius, smoothness, smoothness, 0, Math.PI * .5, Math.PI * .5, Math.PI * .5);
            corner3.translate(-halfWidth, -halfHeight, halfDepth);
            var corner4 = new THREE.SphereGeometry(radius, smoothness, smoothness, Math.PI * .5, Math.PI * .5, Math.PI * .5, Math.PI * .5);
            corner4.translate(halfWidth, -halfHeight, halfDepth);

            geometry.merge(corner1);
            geometry.merge(corner2);
            geometry.merge(corner3);
            geometry.merge(corner4);

            var edge = new THREE.CylinderGeometry(radius, radius, width - radius * 2, smoothness, widthSegments, true, 0, Math.PI * .5);
            edge.rotateZ(Math.PI * .5);
            edge.translate(0, halfHeight, halfDepth);
            var edge2 = new THREE.CylinderGeometry(radius, radius, width - radius * 2, smoothness, widthSegments, true, Math.PI * 1.5, Math.PI * .5);
            edge2.rotateZ(Math.PI * .5);
            edge2.translate(0, -halfHeight, halfDepth);

            // height
            var edge3 = new THREE.CylinderGeometry(radius, radius, height - radius * 2, smoothness, heightSegments, true, 0, Math.PI * .5);
            edge3.translate(halfWidth, 0, halfDepth);
            var edge4 = new THREE.CylinderGeometry(radius, radius, height - radius * 2, smoothness, heightSegments, true, Math.PI * 1.5, Math.PI * .5);
            edge4.translate(-halfWidth, 0, halfDepth);

            // depth
            var edge5 = new THREE.CylinderGeometry(radius, radius, depth - radius * 2, smoothness, depthSegments, true, 0, Math.PI * .5);
            edge5.rotateX(-Math.PI * .5);
            edge5.translate(halfWidth, halfHeight, 0);
            var edge6 = new THREE.CylinderGeometry(radius, radius, depth - radius * 2, smoothness, depthSegments, true, Math.PI * .5, Math.PI * .5);
            edge6.rotateX(-Math.PI * .5);
            edge6.translate(halfWidth, -halfHeight, 0);

            edge.merge(edge2);
            edge.merge(edge3);
            edge.merge(edge4);
            edge.merge(edge5);
            edge.merge(edge6);

            // sides
            // front
            var side = new THREE.PlaneGeometry(width - radius * 2, height - radius * 2, widthSegments, heightSegments);
            side.translate(0, 0, depth * .5);

            // right
            var side2 = new THREE.PlaneGeometry(depth - radius * 2, height - radius * 2, depthSegments, heightSegments);
            side2.rotateY(Math.PI * .5);
            side2.translate(width * .5, 0, 0);

            side.merge(side2);

            geometry.merge(edge);
            geometry.merge(side);

            // duplicate and flip
            var secondHalf = geometry.clone();
            secondHalf.rotateY(Math.PI);
            geometry.merge(secondHalf);

            // top
            var top = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments);
            top.rotateX(-Math.PI * .5);
            top.translate(0, height * .5, 0);

            // bottom
            var bottom = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments);
            bottom.rotateX(Math.PI * .5);
            bottom.translate(0, -height * .5, 0);

            geometry.merge(top);
            geometry.merge(bottom);

            geometry.mergeVertices();

            return geometry;
        }

        function createCube() {
            /* Create cube */

            var positionX = -20;
            var positionY = -20;
            var positionZ = -20;
            var index = 0;

            for(var i=0; i<3; i++) {
                positionX = -20;
                positionZ += 10;
                for(var j=0; j<3; j++) {
                    positionX += 10;
                    positionY = -20;
                    for(var k=0; k<3; k++){
                        positionY += 10;
                        cubeGeometry = RoundEdgedBox(10, 10, 10, 1, 1, 1, 1, 1);
                        var faces = cubeGeometry.faces;
                        for(let x = 0; x<faces.length; x++) {
                            faces[x].color.setHex(0x000000);
                        }

                        cubeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, vertexColors: true});
                        cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                        cube.position.set(positionX, positionY, positionZ);
                        cube.castShadow = true;
                        scene.add(cube);

                        cubeArray.push(cube);

                        /* Pushing the index to the required Array */
                        if(positionZ === -10) { // back
                            backArr.push(index);
                        } else if(positionZ === 10) { // front
                            frontArr.push(index);
                        } else { // front Mid
                            frontMid.push(index);
                        }

                        if(positionX === -10) { // left
                            leftArr.push(index);
                        } else if(positionX === 10) { // right
                            rightArr.push(index);
                        } else { // right Mid
                            rightMid.push(index);
                        }

                        if(positionY === -10) { // down
                            downArr.push(index);
                        } else if(positionY === 10) { // top
                            topArr.push(index);
                        } else { // top Mid
                            topMid.push(index);
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
        function rightRotation(left, rev, double=1) {

            /* Initialize a new Group */
            cubeGroup = new THREE.Group();

            var tempState = [];

            for (let i=0; i<cubeState.length; i++){
                tempState[i] = cubeState[i].slice();
            }

            for(let d = 0; d<double; d++) {
                var finalArr;
                var initArr = (left) ? leftArr : rightArr;
                if(d === 1) {
                    initArr = rightMid;
                } else if(d === 2) {
                    initArr = (left) ? rightArr : leftArr;
                }

                finalArr = rotate(initArr);

                if ((!left && !rev) || (left && rev)) {
                    finalArr.reverse();
                    for (let i = 0; i < finalArr.length; i++) {
                        tempState[initArr[i]][0] = cubeState[finalArr[i]][0];
                        tempState[initArr[i]][1] = cubeState[finalArr[i]][1];
                        tempState[initArr[i]][2] = cubeState[finalArr[i]][4];
                        tempState[initArr[i]][3] = cubeState[finalArr[i]][5];
                        tempState[initArr[i]][4] = cubeState[finalArr[i]][3];
                        tempState[initArr[i]][5] = cubeState[finalArr[i]][2];

                        /* Add to group */
                        cubeGroup.add(cubeArray[initArr[i]]);
                    }
                    rotationCoeff = -1 * guiControls.Speed;
                } else {
                    for (let i = 0; i < finalArr.length; i++) {
                        tempState[initArr[i]][0] = cubeState[finalArr[i]][0];
                        tempState[initArr[i]][1] = cubeState[finalArr[i]][1];
                        tempState[initArr[i]][2] = cubeState[finalArr[i]][5];
                        tempState[initArr[i]][3] = cubeState[finalArr[i]][4];
                        tempState[initArr[i]][4] = cubeState[finalArr[i]][2];
                        tempState[initArr[i]][5] = cubeState[finalArr[i]][3];

                        /* Add to group */
                        cubeGroup.add(cubeArray[initArr[i]]);
                    }
                    rotationCoeff = 1 * guiControls.Speed;
                }
            }


            rotationVector = vectorX;
            cubeState = tempState;
            scene.add(cubeGroup);

            doRotation = true;
        }

        /* Function for both front and back rotations */
        function frontRotation(back, rev, double = 1) {

            /* Initialize a new Group */
            cubeGroup = new THREE.Group();

            var tempState = [];

            for (let i=0; i<cubeState.length; i++){
                tempState[i] = cubeState[i].slice();
            }

            for(let d = 0; d < double; d++) {
                var finalArr;
                var initArr = (back) ? backArr : frontArr;
                if(d === 1) {
                    initArr = frontMid;
                } else if(d === 2) {
                    initArr = (back) ? frontArr : backArr;
                }

                finalArr = rotate(initArr);


                if ((!back && !rev) || (back && rev)) {
                    for (let i = 0; i < finalArr.length; i++) {
                        tempState[initArr[i]][0] = cubeState[finalArr[i]][2];
                        tempState[initArr[i]][1] = cubeState[finalArr[i]][3];
                        tempState[initArr[i]][2] = cubeState[finalArr[i]][1];
                        tempState[initArr[i]][3] = cubeState[finalArr[i]][0];
                        tempState[initArr[i]][4] = cubeState[finalArr[i]][4];
                        tempState[initArr[i]][5] = cubeState[finalArr[i]][5];

                        /* Add to group */
                        cubeGroup.add(cubeArray[initArr[i]]);
                    }
                    rotationCoeff = -1 * guiControls.Speed;
                } else {
                    finalArr.reverse();
                    for (let i = 0; i < finalArr.length; i++) {
                        tempState[initArr[i]][0] = cubeState[finalArr[i]][3];
                        tempState[initArr[i]][1] = cubeState[finalArr[i]][2];
                        tempState[initArr[i]][2] = cubeState[finalArr[i]][0];
                        tempState[initArr[i]][3] = cubeState[finalArr[i]][1];
                        tempState[initArr[i]][4] = cubeState[finalArr[i]][4];
                        tempState[initArr[i]][5] = cubeState[finalArr[i]][5];

                        /* Add to group */
                        cubeGroup.add(cubeArray[initArr[i]]);
                    }
                    rotationCoeff = 1 * guiControls.Speed;
                }
            }


            rotationVector = vectorZ;
            cubeState = tempState;
            scene.add(cubeGroup);
            doRotation = true;
        }

        /* Function for handling both top and down rotations */
        function topRotation(down, rev, double = 1) {

            /* Initialize a new Group */
            cubeGroup = new THREE.Group();

            var tempState = [];


            for (let i=0; i<cubeState.length; i++){
                tempState[i] = cubeState[i].slice();
            }

            for(let d=0; d<double; d++) {
                var finalArr;
                var initArr = (down) ? downArr : topArr;
                if(d === 1) {
                    initArr = topMid;
                } else if(d === 2) {
                    initArr = (down) ? topArr : downArr;
                }

                finalArr = rotate(initArr);

                if ((!down && !rev) || (down && rev)) {
                    for (let i = 0; i < finalArr.length; i++) {
                        tempState[initArr[i]][0] = cubeState[finalArr[i]][5];
                        tempState[initArr[i]][1] = cubeState[finalArr[i]][4];
                        tempState[initArr[i]][2] = cubeState[finalArr[i]][2];
                        tempState[initArr[i]][3] = cubeState[finalArr[i]][3];
                        tempState[initArr[i]][4] = cubeState[finalArr[i]][0];
                        tempState[initArr[i]][5] = cubeState[finalArr[i]][1];

                        /* Add to group */
                        cubeGroup.add(cubeArray[initArr[i]]);
                    }
                    rotationCoeff = -1 * guiControls.Speed;
                } else {
                    finalArr.reverse();
                    for (let i = 0; i < finalArr.length; i++) {
                        tempState[initArr[i]][0] = cubeState[finalArr[i]][4];
                        tempState[initArr[i]][1] = cubeState[finalArr[i]][5];
                        tempState[initArr[i]][2] = cubeState[finalArr[i]][2];
                        tempState[initArr[i]][3] = cubeState[finalArr[i]][3];
                        tempState[initArr[i]][4] = cubeState[finalArr[i]][1];
                        tempState[initArr[i]][5] = cubeState[finalArr[i]][0];

                        /* Add to group */
                        cubeGroup.add(cubeArray[initArr[i]]);
                    }
                    rotationCoeff = 1 * guiControls.Speed;
                }
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
                    faces[faceIndexArr[x]].color.setHex(cubeState[i][x]);
                    faces[faceIndexArr[x] + 1].color.setHex(cubeState[i][x]);
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
            camera.position.set(-30, 25, 60);
            if(!addControls)
                camera.position.set(-65, 35, 65);
            renderer = new THREE.WebGLRenderer({antialias: true, precision: 'highp'});
            renderer.setClearColor(backColor);
            renderer.setSize(TH_WIDTH, TH_HEIGHT);
            renderer.shadowMap.enabled = true;

            /* Adding controls to the scene */
            if(addControls){
                controls = new OrbitControls( camera, canvasDiv);
                controls.enableZoom = false;
                controls.enabled = false;
            }
            else
                camera.lookAt(0, 0, 0);

            /* Adding Light to the Scene */
            if(addControls)
                scene.add(new THREE.AmbientLight(0xffffff));
            else {
                var spotLight = new THREE.DirectionalLight(0xffffff);
                spotLight.position.set(-40, 40, 40);
                scene.add(spotLight);

                spotLight = new THREE.PointLight(0xffffff, 0.44);
                spotLight.position.set(0, 200, 0);
                spotLight.castShadow = true;
                spotLight.shadow.radius = 5;
                spotLight.shadow.normalBias = 10;
                scene.add(spotLight);
            }

            // * Adding three vectirs to support
            vectorX = new THREE.Vector3(1, 0, 0).normalize();
            vectorY = new THREE.Vector3(0, 1, 0).normalize();
            vectorZ = new THREE.Vector3(0, 0, 1).normalize();

            /* Adding plane */
            var planeGeometry = new THREE.PlaneGeometry(100, 100, 100);
            var planeMaterial = new THREE.MeshLambertMaterial({color: backColor});
            var plane = new THREE.Mesh(planeGeometry, planeMaterial);

            plane.rotation.x = -Math.PI / 2;
            plane.receiveShadow = true;

            plane.position.set(0, -27, 0);

            scene.add(plane);

            /* Initializing all the arrays */
            frontArr = [];
            backArr = [];
            rightArr = [];
            leftArr = [];
            topArr = [];
            downArr = [];
            // Middle layer arrays
            rightMid = [];
            frontMid = [];
            topMid = [];

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
                const togglePause = pane.addButton({title: 'Play / Pause'});
                togglePause.on('click', function(){
                    cubePaused = !cubePaused;
                });
                pane.addSeparator();
                const f1 = pane.addFolder({
                    title: 'Other Controls',
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
                f1.addSeparator();
                const resetCubeButton = f1.addButton({title: 'Reset Cube'});
                resetCubeButton.on('click', function () {
                    resetCube(true);
                    f1.expanded = false;
                });
                const cameraBtn = f1.addButton({title: 'Reset Camera'});
                cameraBtn.on('click', function(){
                    controls.reset();
                    f1.expanded = false;
                });

                f1.addSeparator();
                f1.addInput(guiControls, 'Steps').on('change', function () {
                    f1.expanded = false;
                });
                f1.addSeparator();
                f1.addInput(guiControls, 'cameraControls', {label:'Camera Controls'})
                    .on('change', function() {
                        if(addControls) {
                            controls.enabled = !controls.enabled;
                        }
                        f1.expanded = false;
                    });
                f1.expanded = false;
            }

            /* Add event listener to window */
            window.addEventListener('resize', resizeWindow);

            /* Adding next Label */
            if(cubeControls)
                canvasDiv.appendChild(nextLbl);

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
                }, 100);
            }
            rotationQueue.length = 0;

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
                case -23:   // z prime rotation
                    if(!init)
                        nextLbl.innerHTML = "z'";
                    return (function() {
                        frontRotation(false, true, 3);
                    });
                case -22:    // y prime rotation
                    if(!init)
                        nextLbl.innerHTML = "y'";
                    return (function() {
                        topRotation(false, true, 3);
                    });
                case -21:   // x prime rotation
                    if(!init)
                        nextLbl.innerHTML = "x'";
                    return (function() {
                        rightRotation(false, true, 3);
                    });
                case -16:    // Back Prime double
                    if(!init)
                        nextLbl.innerHTML = "b'";
                    return (function() {
                        frontRotation(true, true, 2);
                    });
                case -15:    // Front Prime double
                    if(!init)
                        nextLbl.innerHTML = "f'";
                    return (function(){
                        frontRotation(false, true, 2);
                    });
                case -14:    // Bottom Prime double
                    if(!init)
                        nextLbl.innerHTML = "d'";
                    return (function(){
                        topRotation(true, true, 2);
                    });
                case -13:    // Top Prime double
                    if(!init)
                        nextLbl.innerHTML = "u'";
                    return (function() {
                        topRotation(false, true, 2);
                    });
                case -12:    // Left Prime double
                    if(!init)
                        nextLbl.innerHTML = "l'";
                    return (function(){
                        rightRotation(true, true, 2);
                    });
                case -11:    // Right Prime double
                    if(!init)
                        nextLbl.innerHTML = "r'";
                    return (function(){
                        rightRotation(false, true, 2);
                    });
                case -6:    // Back Prime
                    if(!init)
                        nextLbl.innerHTML = "B'";
                    return (function() {
                        frontRotation(true, true);
                    });
                case -5:    // Front Prime
                    if(!init)
                        nextLbl.innerHTML = "F'";
                    return (function(){
                        frontRotation(false, true);
                    });
                case -4:    // Bottom Prime
                    if(!init)
                        nextLbl.innerHTML = "D'";
                    return (function(){
                        topRotation(true, true);
                    });
                case -3:    // Top Prime
                    if(!init)
                        nextLbl.innerHTML = "U'";
                    return (function() {
                        topRotation(false, true);
                    });
                case -2:    // Left Prime
                    if(!init)
                        nextLbl.innerHTML = "L'";
                    return (function(){
                        rightRotation(true, true);
                    });
                case -1:    // Right Prime
                    if(!init)
                        nextLbl.innerHTML = "R'";
                    return (function(){ 
                        rightRotation(false, true);
                    });
                case 1:     // Right
                    if(!init)
                        nextLbl.innerHTML = "R";
                    return (function(){
                        rightRotation(false, false);
                    });
                case 2:     // Left
                    if(!init)
                        nextLbl.innerHTML = "L";
                    return (function(){
                        rightRotation(true, false);
                    });
                case 3:     // Top
                    if(!init)
                        nextLbl.innerHTML = "U";
                    return (function(){
                        topRotation(false, false);
                    });
                case 4:     // Bottom
                    if(!init)
                        nextLbl.innerHTML = "D";
                    return (function(){
                        topRotation(true, false);
                    });
                case 5:     // Front
                    if(!init)
                        nextLbl.innerHTML = "F";
                    return (function(){
                        frontRotation(false, false);
                    });
                case 6:     // Back
                    if(!init)
                        nextLbl.innerHTML = "B";
                    return (function() {
                        frontRotation(true, false);
                    });
                case 11:     // Right double
                    if(!init)
                        nextLbl.innerHTML = "r";
                    return (function(){
                        rightRotation(false, false, 2);
                    });
                case 12:     // Left double
                    if(!init)
                        nextLbl.innerHTML = "l";
                    return (function(){
                        rightRotation(true, false, 2);
                    });
                case 13:     // Top double
                    if(!init)
                        nextLbl.innerHTML = "u";
                    return (function(){
                        topRotation(false, false, 2);
                    });
                case 14:     // Bottom double
                    if(!init)
                        nextLbl.innerHTML = "d";
                    return (function(){
                        topRotation(true, false, 2);
                    });
                case 15:     // Front double
                    if(!init)
                        nextLbl.innerHTML = "f";
                    return (function(){
                        frontRotation(false, false, 2);
                    });
                case 16:     // Back double
                    if(!init)
                        nextLbl.innerHTML = "b";
                    return (function() {
                        frontRotation(true, false, 2);
                    });
                case 21:    // x Rotation
                    if(!init)
                        nextLbl.innerHTML = 'x';
                    return (function() {
                        rightRotation(false, false, 3);
                    });
                case 22:    // y Rotation
                    return (function() {
                        topRotation(false, false, 3);
                    });
                case 23:    // z Rotation
                    return (function () {
                        frontRotation(false, false, 3);
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
                                addAgain();
                                loop = !loop;
                            }, waitTime);
                        } else {
                            setTimeout(function () {
                                addAgain();
                                loop = !loop;
                            }, waitTime);
                        }
                    }
                    return null;
            }
        }

        function render() {
            requestAnimationFrame(render);

            /* Rotate the Given face and then perform required actions */
            if(doRotation && rotationVar < (Math.PI/2.0) && !clearing && !cubePaused) {
                rotationVar = rotationVar + guiControls.Speed;
                cubeGroup.rotateOnAxis(rotationVector, rotationCoeff);
            } else {
                if(doRotation) {
                    cubeGroup.rotateOnAxis(rotationVector, (((rotationCoeff > 0) ? -1: 1) * rotationVar));
                    giveFaceColors();
                    doRotation = false;
                    /* If guiControls.Steps = true pause after every rotation */
                    if(guiControls.Steps) {
                        cubePaused = true;
                    }
                }
                if(!cubePaused) {
                    var nextFunc = nextRotation();
                        if(nextFunc !== null){
                            nextFunc();
                        } else if(cubeControls){
                            cubePaused = true;
                            nextLbl.innerHTML = '';
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