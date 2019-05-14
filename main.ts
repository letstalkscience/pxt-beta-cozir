input.onButtonPressed(Button.A, function () {
    basic.showNumber(COZIR.Co2())
    basic.showString(" PPM")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(COZIR.temperature())
    basic.showString(" C")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(COZIR.relativeHumidity())
    basic.showString(" %RH")
})
serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate9600
)