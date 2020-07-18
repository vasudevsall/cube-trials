var orange = 0xffa500;
var red = 0xff0000;
var yellow = 0xffff00;
var white = 0xffffff;
var blue = 0x0000ff;
var green = 0x00ff00;
var black = 0x000000;

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