// 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
// 11 -> Right double layer, etc.
const commonWaitTime = 1000;
export const CUBE_DATA = [
    {
        id: 1,
        addControls: false,
        moves: [1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1],
        backColor: 0x1b262c,
        loop: true,
        waitTime: 15000,
        resetFaces: false,
        initMoves: [],
        cubeControls: false,
        initPaused: false
    },
    {
        id: 2,
        addControls: true,
        moves: [5],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 3,
        addControls: true,
        moves: [-5],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 4,
        addControls: true,
        moves: [1],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 5,
        addControls: true,
        moves: [-1],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 6,
        addControls: true,
        moves: [2],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 7,
        addControls: true,
        moves: [-2],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 8,
        addControls: true,
        moves: [3],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 9,
        addControls: true,
        moves: [-3],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 10,
        addControls: true,
        moves: [4],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 11,
        addControls: true,
        moves: [-4],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 12,
        addControls: true,
        moves: [6],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 13,
        addControls: true,
        moves: [-6],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 14,
        addControls: true,
        moves: [5, 1, 3, -1, -3, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 15,
        addControls: true,
        moves: [1, 3, -1, 3, 1, 3, 3, -1, 3],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [1, 3, -1, 3, 1, 3, 3, -1, 3, 1, 3, -1, 3, 1, 3, 3, -1, 3, 1, 3, -1, 3, 1, 3, 3, -1, 3],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 16,
        addControls: true,
        moves: [5, 1, -3, -1, -3, 1, 3, -1, -5, 1, 3, -1, -3, -1, 5, 1, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [3, 5,1,3,-1,-3,-5, 5,1,3,-1,-3,-5, 5,1,3,-1,-3,-5, 3, 1,3,-1,3,1,3,3,-1, 1,3,-1,3,1,3,3,-1, 3],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 17,
        addControls: true,
        moves: [5, 5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 18,
        addControls: true,
        moves: [-5, -1, -4, 1, 5, 5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 5, -1, 4, 1, 5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 19,
        addControls: true,
        moves: [5, -3, 1, 3],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, -3, 1, 3],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 20,
        addControls: true,
        moves: [5, 4, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, -4, -5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 21,
        addControls: true,
        moves: [-1, -4, 1],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [-1, 4, 1],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 22,
        addControls: true,
        moves: [5, 2, 4, 4, -2, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 2, 4, 4, -2, -5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 23,
        addControls: true,
        moves: [-3, -2, 3, 2, 3, 5, -3, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 3, -5, -3, -2, -3, 2, 3],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 24,
        addControls: true,
        moves: [3, 1, -3, -1, -3, -5, 3, 5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [-5, -3, 5, 3, 1, 3, -1, -3],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 25,
        addControls: true,
        moves: [5, 1, 3, -1, -3, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 1, 3, -1, -3, -5, 5, 1, 3, -1, -3, -5, 3, 5, 1, 3, -1, -3, -5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 26,
        addControls: true,
        moves: [5, 1, 3, -1, -3, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 1, 3, -1, -3, -5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 27,
        addControls: true,
        moves: [5, 1, 3, -1, -3, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 1, 3, -1, -3, -5, 5, 1, 3, -1, -3, -5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 28,
        addControls: true,
        moves: [1, 3, -1, 3, 1, 3, 3, -1, 3],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [ 1, 3, -1, 3, 1, 3, 3, -1, 3, 3, 3, 1, 3, -1, 3, 1, 3, 3, -1, 3, 3 ],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 29,
        addControls: true,
        moves: [1, 3, -1, 3, 1, 3, 3, -1, 3],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [ 1, 3, -1, 3, 1, 3, 3, -1, 3],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 30,
        addControls: true,
        moves: [3, 1, -3, -2, 3, -1, -3, 2],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [3, 1, -3, -2, 3, -1, -3, 2, 3, 1, -3, -2, 3, -1, -3, 2],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 31,
        addControls: true,
        moves: [-1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, 3,
            -1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, 3,
            -1, -4, 1, 4, -1, -4, 1, 4, 3,
            -1, -4, 1, 4, -1, -4, 1, 4, 3],
        // (R' D' R D)x4 U
        // (R' D' R D)x4 U
        // (R' D' R D)x2 U
        //(R' D' R D)x2
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [-1, -4, 1, 4, -1, -4, 1, 4, 3, -1, -4, 1, 4, -1, -4, 1, 4, 3,
            -1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, 3,
            -1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, -1, -4, 1, 4, 3],
        // (R' D' R D)x2 U (R' D' R D)x2 U (R' D' R D)x4 U (R' D' R D)x4
        cubeControls: true,
        initPaused: true
    },
    // Two Look
    {
        id: 32,
        addControls: true,
        moves: [11],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 33,
        addControls: true,
        moves: [-11],
        backColor: 0xffffff,
        loop: true,
        waitTime: 0,
        resetFaces: false,
        initMoves: [],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 34,
        addControls: true,
        moves: [-1, 5, -1, 6, 6, 1, -5, -1, 6, 6, 1, 1],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        // Rev of above algorithm and changing of centers
        initMoves: [1, 1, 6, 6, 1, 5, -1, 6, 6, 1, -5, 1,
            5, 5, 3, 2, -1, 5, 5, -2, 1, 3, 5, 5],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 35,
        addControls: true,
        moves: [5, 5, 3, 2, -1, 5, 5, -2, 1, 3, 5, 5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, 5, 3, 2, -1, 5, 5, -2, 1, 3, 5, 5, 5, 5, 3, 2, -1, 5, 5, -2, 1, 3, 5, 5],
        cubeControls: true,
        initPaused: true
    },
    //Two OLL animations
    {
        id: 36,
        addControls: true,
        moves: [1, 3, -1, 3, 1, 3, 3, -1],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [1, -3, -3, -1, -3, 1, -3, -1],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 37,
        addControls: true,
        moves: [-2, -3, 2, -3, -2, 3, 3, 2],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [-2, -3, -3, 2, 3, -2, 3, 2],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 38,
        addControls: true,
        moves: [22, -1, -3, 1, -3, -1, 3, 1, -3, -1, 3, 3, 1],//y (R' U' R) U' (R' U R) U' (R' U2 R)
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [-22, -1, -3, -3, 1, 3, -1, -3, 1, 3, -1, 3, 1, 22],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 39,
        addControls: true,
        moves: [1, 3, 3, 1, 1, -3, 1, 1, -3, 1, 1, 3, 3, 1],// R U2 R2 U' R2 U' R2 U2 R
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [-1, 3, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 3, -1],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 40,
        addControls: true,
        moves: [22, 1, 3, -1, -3,
            1, -3, -1, 3, 3,
            1, -3, -1, 3, 3,
            1, 3, -1],// y (R U R' U') (R U’ R’ U2)*2 (R U R’)
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [22, 1, -3, -1, 3, 3, 1, 3, -1, 3, 3, 1, 3, -1, 3, 1, -3, -1, -22],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 41,
        addControls: true,
        moves: [11, 3, -1, -3, -11, 5, 1, -5],// ( r U R' U') ( r' F R F')
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [5, -1, -5, 11, 3, 1, -3, -11],
        cubeControls: true,
        initPaused: true
    },
    {
        id: 42,
        addControls: true,
        moves: [-5, 11, 3, -1, -3, -11, 5, 1],// F' ( r U R' U') (r' F R )
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [-1, -5, 11, 3, 1, -3, -11, 5],
        cubeControls: true,
        initPaused: true
    }
]