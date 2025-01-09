pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.showIcon(IconNames.Heart)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.showIcon(IconNames.SmallHeart)
    }
})
