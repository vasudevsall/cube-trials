// 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
var commonWaitTime = 3000;
export const CUBE_DATA = [
    {
        id: 1,
        addControls: true,
        moves: [1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1],
        backColor: 0x1b262c,
        loop: true,
        waitTime: 500,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 2,
        addControls: true,
        moves: [5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 3,
        addControls: true,
        moves: [-5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 4,
        addControls: true,
        moves: [1],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 5,
        addControls: true,
        moves: [-1],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 6,
        addControls: true,
        moves: [2],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 7,
        addControls: true,
        moves: [-2],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 8,
        addControls: true,
        moves: [3],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 9,
        addControls: true,
        moves: [-3],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 10,
        addControls: true,
        moves: [4],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 11,
        addControls: true,
        moves: [-4],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 12,
        addControls: true,
        moves: [6],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 13,
        addControls: true,
        moves: [-6],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: false,
        initMoves: []
    },
    {
        id: 14,
        addControls: true,
        moves: [5, 1, 3, -1, -3, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: []
    },
    {
        id: 15,
        addControls: true,
        moves: [1, 3, -1, 3, 1, 3, 3, -1, 3],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [1, 3, -1, 3, 1, 3, 3, -1, 3, 1, 3, -1, 3, 1, 3, 3, -1, 3, 1, 3, -1, 3, 1, 3, 3, -1, 3]
    },
    {
        id: 16,
        addControls: true,
        moves: [5, 1, -3, -1, -3, 1, 3, -1, -5, 1, 3, -1, -3, -1, 5, 1, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: commonWaitTime,
        resetFaces: true,
        initMoves: [3, 5,1,3,-1,-3,-5, 5,1,3,-1,-3,-5, 5,1,3,-1,-3,-5, 3, 1,3,-1,3,1,3,3,-1, 1,3,-1,3,1,3,3,-1, 3]
    }
]