const orange = 0xff681f//0xffa500;
const red = 0xfd0e35;//0xff0000;
const yellow = 0xffdb00;//0xffff00;
const white = 0xffffff;
const blue = 0x02a4d3;//0x0000ff;
const green = 0x3aa655;//0x00ff00;
const black = 0x000000;
const grey = 0x808080;

export const CUBE_STATE = [
    // 0xffa500,    // $ Orange -> right
    // 0xff0000,    // $ red    -> left
    // 0xffff00,    // $ yellow -> top
    // 0xffffff,    // $ white  -> bottom
    // 0x0000ff,    // $ blue   -> front
    // 0x00ff00,    // $ green  -> back

    // # 0 : (left, bottom, back) [right-> black, left-> red, top-> black, bottom-> white, front-> black, back-> green]
    [black, red, black, white, black, green],

    // # 1: (left, back) [black, red, black, black, black, green]
    [black, red, black, black, black, green],

    // # 2: (left, top, back) [black, red, yellow, black, black, green]
    [black, red, yellow, black, black, green],

    // # 3: (bottom , back) [black, black, black, white, black, green]
    [black, black, black, white, black, green],

    // # 4: (back) [black, black, black, black, black, green]
    [black, black, black, black, black, green],

    // # 5: (top, back) [black, black, yellow, black, black, green]
    [black, black, yellow, black, black, green],

    // # 6: (right, bottom, back) [orange, black, black, white, black, green]
    [orange, black, black, white, black, green],

    // # 7: (right, back) [orange, black, black, black, black, green]
    [orange, black, black, black, black, green],

    // # 8: (right, top, back) [orange, black, yellow, black, black, green]
    [orange, black, yellow, black, black, green],

    // # 9: (left, bottom) [black, red, black, white, black, black]
    [black, red, black, white, black, black],

    // # 10: (left) [black, red, black, black, black, black]
    [black, red, black, black, black, black],

    // # 11: (left, top) [black, red, yellow, black, black, black]
    [black, red, yellow, black, black, black],

    // # 12: (bottom) [black, black, black, white, black, black]
    [black, black, black, white, black, black],

    // # 13: () [black, black, black, black, black, black]
    [black, black, black, black, black, black],

    // # 14: (top) [black, black, yellow, black, black, black]
    [black, black, yellow, black, black, black],

    // # 15: (right, bottom) [orange, black, black, white, black, black]
    [orange, black, black, white, black, black],

    // # 16: (right) [orange, black, black, black, black, black]
    [orange, black, black, black, black, black],

    // # 17: (right, top) [orange, black, yellow, black, black, black]
    [orange, black, yellow, black, black, black],

    // # 18: (left, bottom, front) [black, red, black, white, blue, black]
    [black, red, black, white, blue, black],

    // # 19: (left, front) [black, red, black, black, blue, black]
    [black, red, black, black, blue, black],

    // # 20: (left, top, front) [black, red, yellow, black, blue, black]
    [black, red, yellow, black, blue, black],

    // # 21: (bottom, front) [black, black, black, white, blue, black]
    [black, black, black, white, blue, black],

    // # 22: (front) [black, black, black, black, blue, black]
    [black, black, black, black, blue, black],

    // # 23: (top, front) [black, black, yellow, black, blue, black]
    [black, black, yellow, black, blue, black],

    // # 24: (right, bottom, front) [orange, black, black, white, blue, black]
    [orange, black, black, white, blue, black],

    // # 25: (right, front) [orange, black, black, black, blue, black]
    [orange, black, black, black, blue, black],

    // # 26: (right, top, front) [orange, black, yellow, black, blue, black]
    [orange, black, yellow, black, blue, black]
];

export const CUBE_STATE_CROSS = [
    // # 0 : (left, bottom, back)
    [black, grey, black, grey, black, grey],
    // # 1: (left, back)
    [black, grey, black, black, black, grey],
    // # 2: (left, top, back)
    [black, grey, grey, black, black, grey],
    // # 3: (bottom , back)
    [black, black, black, grey, black, grey],
    // # 4: (back)
    [black, black, black, black, black, green],
    // # 5: (top, back)
    [black, black, white, black, black, green],
    // # 6: (right, bottom, back)
    [grey, black, black, grey, black, grey],
    // # 7: (right, back)
    [grey, black, black, black, black, grey],
    // # 8: (right, top, back)
    [grey, black, grey, black, black, grey],
    // # 9: (left, bottom)
    [black, grey, black, grey, black, black],
    // # 10: (left)
    [black, red, black, black, black, black],
    // # 11: (left, top)
    [black, red, white, black, black, black],
    // # 12: (bottom)
    [black, black, black, yellow, black, black],
    // # 13: ()
    [black, black, black, black, black, black],
    // # 14: (top)
    [black, black, white, black, black, black],
    // # 15: (right, bottom)
    [grey, black, black, grey, black, black],
    // # 16: (right)
    [orange, black, black, black, black, black],
    // # 17: (right, top)
    [orange, black, white, black, black, black],
    // # 18: (left, bottom, front)
    [black, grey, black, grey, grey, black],
    // # 19: (left, front)
    [black, grey, black, black, grey, black],
    // # 20: (left, top, front)
    [black, grey, grey, black, grey, black],
    // # 21: (bottom, front)
    [black, black, black, grey, grey, black],
    // # 22: (front)
    [black, black, black, black, blue, black],
    // # 23: (top, front)
    [black, black, white, black, blue, black],
    // # 24: (right, bottom, front)
    [grey, black, black, grey, grey, black],
    // # 25: (right, front)
    [grey, black, black, black, grey, black],
    // # 26: (right, top, front)
    [grey, black, grey, black, grey, black]
];

export const CUBE_STATE_FIRST_CORNERS = [
    // # 0 : (left, bottom, back)
    [black, grey, black, grey, black, grey],
    // # 1: (left, back)
    [black, grey, black, black, black, grey],
    // # 2: (left, top, back)
    [black, red, white, black, black, green],
    // # 3: (bottom , back)
    [black, black, black, grey, black, grey],
    // # 4: (back)
    [black, black, black, black, black, green],
    // # 5: (top, back)
    [black, black, white, black, black, green],
    // # 6: (right, bottom, back)
    [grey, black, black, grey, black, grey],
    // # 7: (right, back)
    [grey, black, black, black, black, grey],
    // # 8: (right, top, back)
    [orange, black, white, black, black, green],
    // # 9: (left, bottom)
    [black, grey, black, grey, black, black],
    // # 10: (left)
    [black, red, black, black, black, black],
    // # 11: (left, top)
    [black, red, white, black, black, black],
    // # 12: (bottom)
    [black, black, black, yellow, black, black],
    // # 13: ()
    [black, black, black, black, black, black],
    // # 14: (top)
    [black, black, white, black, black, black],
    // # 15: (right, bottom)
    [grey, black, black, grey, black, black],
    // # 16: (right)
    [orange, black, black, black, black, black],
    // # 17: (right, top)
    [orange, black, white, black, black, black],
    // # 18: (left, bottom, front)
    [black, grey, black, grey, grey, black],
    // # 19: (left, front)
    [black, grey, black, black, grey, black],
    // # 20: (left, top, front)
    [black, red, white, black, blue, black],
    // # 21: (bottom, front)
    [black, black, black, grey, grey, black],
    // # 22: (front)
    [black, black, black, black, blue, black],
    // # 23: (top, front)
    [black, black, white, black, blue, black],
    // # 24: (right, bottom, front)
    [grey, black, black, grey, grey, black],
    // # 25: (right, front)
    [grey, black, black, black, grey, black],
    // # 26: (right, top, front)
    [orange, black, white, black, blue, black]
];

export const CUBE_STATE_SECOND_LAYER = [
    // # 0 : (left, bottom, back)
    [black, red, black, white, black, green],
    // # 1: (left, back)
    [black, red, black, black, black, green],
    // # 2: (left, top, back)
    [black, grey, grey, black, black, grey],
    // # 3: (bottom , back)
    [black, black, black, white, black, green],
    // # 4: (back)
    [black, black, black, black, black, green],
    // # 5: (top, back)
    [black, black, grey, black, black, grey],
    // # 6: (right, bottom, back)
    [orange, black, black, white, black, green],
    // # 7: (right, back)
    [orange, black, black, black, black, green],
    // # 8: (right, top, back)
    [grey, black, grey, black, black, grey],
    // # 9: (left, bottom)
    [black, red, black, white, black, black],
    // # 10: (left)
    [black, red, black, black, black, black],
    // # 11: (left, top)
    [black, grey, grey, black, black, black],
    // # 12: (bottom)
    [black, black, black, white, black, black],
    // # 13: ()
    [black, black, black, black, black, black],
    // # 14: (top)
    [black, black, yellow, black, black, black],
    // # 15: (right, bottom)
    [orange, black, black, white, black, black],
    // # 16: (right)
    [orange, black, black, black, black, black],
    // # 17: (right, top)
    [grey, black, grey, black, black, black],
    // # 18: (left, bottom, front)
    [black, red, black, white, blue, black],
    // # 19: (left, front)
    [black, red, black, black, blue, black],
    // # 20: (left, top, front)
    [black, grey, grey, black, grey, black],
    // # 21: (bottom, front)
    [black, black, black, white, blue, black],
    // # 22: (front)
    [black, black, black, black, blue, black],
    // # 23: (top, front)
    [black, black, grey, black, grey, black],
    // # 24: (right, bottom, front)
    [orange, black, black, white, blue, black],
    // # 25: (right, front)
    [orange, black, black, black, blue, black],
    // # 26: (right, top, front)
    [grey, black, grey, black, grey, black]
];

export const CUBE_STATE_FINAL_LAYER_CROSS = [
    // # 0 : (left, bottom, back)
    [black, red, black, white, black, green],
    // # 1: (left, back)
    [black, red, black, black, black, green],
    // # 2: (left, top, back)
    [black, grey, grey, black, black, grey],
    // # 3: (bottom , back)
    [black, black, black, white, black, green],
    // # 4: (back)
    [black, black, black, black, black, green],
    // # 5: (top, back)
    [black, black, yellow, black, black, grey],
    // # 6: (right, bottom, back)
    [orange, black, black, white, black, green],
    // # 7: (right, back)
    [orange, black, black, black, black, green],
    // # 8: (right, top, back)
    [grey, black, grey, black, black, grey],
    // # 9: (left, bottom)
    [black, red, black, white, black, black],
    // # 10: (left)
    [black, red, black, black, black, black],
    // # 11: (left, top)
    [black, grey, yellow, black, black, black],
    // # 12: (bottom)
    [black, black, black, white, black, black],
    // # 13: ()
    [black, black, black, black, black, black],
    // # 14: (top)
    [black, black, yellow, black, black, black],
    // # 15: (right, bottom)
    [orange, black, black, white, black, black],
    // # 16: (right)
    [orange, black, black, black, black, black],
    // # 17: (right, top)
    [grey, black, yellow, black, black, black],
    // # 18: (left, bottom, front)
    [black, red, black, white, blue, black],
    // # 19: (left, front)
    [black, red, black, black, blue, black],
    // # 20: (left, top, front)
    [black, grey, grey, black, grey, black],
    // # 21: (bottom, front)
    [black, black, black, white, blue, black],
    // # 22: (front)
    [black, black, black, black, blue, black],
    // # 23: (top, front)
    [black, black, yellow, black, grey, black],
    // # 24: (right, bottom, front)
    [orange, black, black, white, blue, black],
    // # 25: (right, front)
    [orange, black, black, black, blue, black],
    // # 26: (right, top, front)
    [grey, black, grey, black, grey, black]
];

export const CUBE_STATE_FINAL_LAYER_EDGES = [
    // # 0 : (left, bottom, back)
    [black, red, black, white, black, green],
    // # 1: (left, back)
    [black, red, black, black, black, green],
    // # 2: (left, top, back)
    [black, grey, grey, black, black, grey],
    // # 3: (bottom , back)
    [black, black, black, white, black, green],
    // # 4: (back)
    [black, black, black, black, black, green],
    // # 5: (top, back)
    [black, black, yellow, black, black, green],
    // # 6: (right, bottom, back)
    [orange, black, black, white, black, green],
    // # 7: (right, back)
    [orange, black, black, black, black, green],
    // # 8: (right, top, back)
    [grey, black, grey, black, black, grey],
    // # 9: (left, bottom)
    [black, red, black, white, black, black],
    // # 10: (left)
    [black, red, black, black, black, black],
    // # 11: (left, top)
    [black, red, yellow, black, black, black],
    // # 12: (bottom)
    [black, black, black, white, black, black],
    // # 13: ()
    [black, black, black, black, black, black],
    // # 14: (top)
    [black, black, yellow, black, black, black],
    // # 15: (right, bottom)
    [orange, black, black, white, black, black],
    // # 16: (right)
    [orange, black, black, black, black, black],
    // # 17: (right, top)
    [orange, black, yellow, black, black, black],
    // # 18: (left, bottom, front)
    [black, red, black, white, blue, black],
    // # 19: (left, front)
    [black, red, black, black, blue, black],
    // # 20: (left, top, front)
    [black, grey, grey, black, grey, black],
    // # 21: (bottom, front)
    [black, black, black, white, blue, black],
    // # 22: (front)
    [black, black, black, black, blue, black],
    // # 23: (top, front)
    [black, black, yellow, black, blue, black],
    // # 24: (right, bottom, front)
    [orange, black, black, white, blue, black],
    // # 25: (right, front)
    [orange, black, black, black, blue, black],
    // # 26: (right, top, front)
    [grey, black, grey, black, grey, black]
];