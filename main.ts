input.onGesture(Gesture.TiltRight, function () {
    x += 1
    if (x >= 5) {
        x = 0
        led.plot(0, y)
        led.unplot(4, y)
    } else {
        led.plot(x, y)
        led.unplot(x - 1, y)
    }
})
input.onButtonPressed(Button.A, function () {
    x += -1
    if (x < 0) {
        x = 4
        led.plot(4, y)
        led.unplot(0, y)
    } else {
        led.plot(x, y)
        led.unplot(x + 1, y)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    x += -1
    if (x < 0) {
        x = 4
        led.plot(4, y)
        led.unplot(0, y)
    } else {
        led.plot(x, y)
        led.unplot(x + 1, y)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    y += 1
    if (y >= 5) {
        y = 0
        led.plot(x, 0)
        led.unplot(x, 4)
    } else {
        led.plot(x, y)
        led.unplot(x, y - 1)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    y += -1
    if (y < 0) {
        y = 4
        led.plot(x, 4)
        led.unplot(x, 0)
    } else {
        led.plot(x, y)
        led.unplot(x, y + 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    y += -1
    if (y < 0) {
        y = 4
        led.plot(x, 4)
        led.unplot(x, 0)
    } else {
        led.plot(x, y)
        led.unplot(x, y + 1)
    }
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (x >= 5) {
        x = 0
        led.plot(0, y)
        led.unplot(4, y)
    } else {
        led.plot(x, y)
        led.unplot(x - 1, y)
    }
})
let y = 0
let x = 0
x = -1
y = 0
