input.onGesture(Gesture.Shake, function () {
    if (randint(1, 3) == 1) {
        basic.showLeds(`
            # . . . #
            # # . # .
            . . # . .
            # # . # .
            # . . . #
            `)
    } else if (randint(1, 3) == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
