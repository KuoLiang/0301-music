input.onPinPressed(TouchPin.P2, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
