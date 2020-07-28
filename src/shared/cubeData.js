// 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
var commonWaitTime = 1000;
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
    }
]