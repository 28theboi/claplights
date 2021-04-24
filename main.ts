input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
})
input.setSoundThreshold(SoundThreshold.Loud, 142)
basic.forever(function () {
    basic.showNumber(input.soundLevel())
})
