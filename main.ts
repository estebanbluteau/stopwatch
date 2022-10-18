let Cronometre = 0
let temps_ecoule = 0
input.onButtonPressed(Button.A, function () {
    Cronometre = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    temps_ecoule = input.runningTime() - Cronometre
    basic.showNumber(temps_ecoule / 1000)
})
basic.forever(function () {
	
})
