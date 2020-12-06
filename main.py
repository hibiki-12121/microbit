def on_button_pressed_a():
    global x
    x += -1
    if x < 0:
        x = 4
        led.plot(4, y)
        led.unplot(0, y)
    else:
        led.plot(x, y)
        led.unplot(x + 1, y)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global y
    y += 1
    if y >= 5:
        y = 0
        led.plot(x, 0)
        led.unplot(x, 4)
    else:
        led.plot(x, y)
        led.unplot(x, y - 1)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global y
    y += -1
    if y < 0:
        y = 4
        led.plot(x, 4)
        led.unplot(x, 0)
    else:
        led.plot(x, y)
        led.unplot(x, y + 1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global x
    x += 1
    if x >= 5:
        x = 0
        led.plot(0, y)
        led.unplot(4, y)
    else:
        led.plot(x, y)
        led.unplot(x - 1, y)
input.on_button_pressed(Button.B, on_button_pressed_b)

y = 0
x = 0
x = -1
y = 0