// 0 -> no rotation, 1 -> right, 2-> left, 3-> top, 4-> bottom, 5-> front, 6-> back
        // -1 -> rightPrime, -2-> leftPrime, -3->topPrime, etc.
export const CUBE_DATA = [
    {
        id: 1,
        addControls: true,
        moves: [1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1],
        backColor: 0x6c757d,
        loop: true
    }
]