// tests go here; this will not be compiled when this package is used as an extension.
Servo.SetLED(1, false)
basic.forever(function() {
    Servo.FullOff(15);
    Servo.FullOff(11);
    Servo.SetLED(1, false)
    basic.pause(1000)
    Servo.FullOn(15);
    Servo.FullOn(11);
    Servo.SetLED(1, true)
    basic.pause(1000)
})