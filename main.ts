basic.showString("Hello!")
for (let Heart = 0; Heart <= 4; Heart++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
for (let Heart = 0; Heart <= 4; Heart++) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        `)
}
for (let Heart = 0; Heart <= 4; Heart++) {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
}
for (let Heart = 0; Heart <= 4; Heart++) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
basic.forever(function () {
	
})
