// 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
export const CUBE_DATA = [
    {
        id: 1,
        addControls: true,
        moves: [1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1],
        backColor: 0x0f4c75,
        loop: true,
        waitTime: 500,
        resetFaces: false
    },
    {
        id: 2,
        addControls: true,
        moves: [5],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 3,
        addControls: true,
        moves: [-5],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 4,
        addControls: true,
        moves: [1],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 5,
        addControls: true,
        moves: [-1],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 6,
        addControls: true,
        moves: [2],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 7,
        addControls: true,
        moves: [-2],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 8,
        addControls: true,
        moves: [3],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 9,
        addControls: true,
        moves: [-3],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 10,
        addControls: true,
        moves: [4],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 11,
        addControls: true,
        moves: [-4],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 12,
        addControls: true,
        moves: [6],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 13,
        addControls: true,
        moves: [-6],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: false
    },
    {
        id: 14,
        addControls: true,
        moves: [5, 1, 3, -1, -3, -5],
        backColor: 0xffffff,
        loop: true,
        waitTime: 1500,
        resetFaces: true
    }
]