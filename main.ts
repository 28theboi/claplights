input.onSound(DetectedSound.Loud, function () {
    if (!(TURNONMICROPHONE)) {
        basic.showIcon(IconNames.Sad)
        TURNONMICROPHONE = 1
    } else {
        basic.showIcon(IconNames.Happy)
        TURNONMICROPHONE = 0
    }
})
let TURNONMICROPHONE = 0
input.setSoundThreshold(SoundThreshold.Loud, 142)
basic.forever(function () {
	
})
