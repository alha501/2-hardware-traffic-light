// RED
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(35)
})
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
radio.setGroup(32)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
basic.showLeds(`
    . . # # #
    . . # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
