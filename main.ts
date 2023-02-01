input.onButtonPressed(Button.A, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(220, music.beat(BeatFraction.Double))
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.showString("hi ")
