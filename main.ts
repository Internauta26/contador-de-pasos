input.onButtonPressed(Button.A, function () {
    Contador_Saltos = 0
    basic.showNumber(Contador_Saltos)
})
input.onGesture(Gesture.FreeFall, function () {
    Contador_Saltos += 1
    basic.showNumber(Contador_Saltos)
})
input.onButtonPressed(Button.AB, function () {
    Contador_Pasos = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Contador_Giros_A_La_Derecha = 0
})
// Al agitar aumentar el valor de la variable en 1
input.onGesture(Gesture.Shake, function () {
    Contador_Pasos += 1
    basic.showNumber(Contador_Pasos)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    Contador_Giros_A_La_Derecha += 1
    basic.showString("Giros")
    basic.showNumber(Contador_Giros_A_La_Derecha)
})
// Valor inicial de la variable
let Contador_Giros_A_La_Derecha = 0
let Contador_Saltos = 0
let Contador_Pasos = 0
Contador_Pasos = 0
basic.forever(function () {
	
})
