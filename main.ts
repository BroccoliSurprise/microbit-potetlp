/**
 * REGLER FOR POTETLØP:
 * 
 * 1) Trykk knapp A for å starte klokken
 * 
 * 2) LØP til du kommer bort til den andre micro:biten som sender ut radiosignaler.
 * 
 * 3) Trykk B når du har kommet i mål for å lese av tiden din.
 * 
 * Dette programmet er nesten ferdig, men vi får ikke lov til å vise tiden vår! Hvor skal vi sette denne løse blokken for å fortelle micro:biten at vi har fått signal fra mål-micro:biten?
 */
radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(2, 2)
})
input.onButtonPressed(Button.A, function () {
    startTid = input.runningTime()
    led.toggle(2, 2)
})
input.onButtonPressed(Button.B, function () {
    if (målPosterNådd == true) {
        basic.showString("Tid " + (input.runningTime() - startTid) / 1000 + " sekunder")
    } else {
        basic.showIcon(IconNames.No)
    }
})
let startTid = 0
let målPosterNådd = false
radio.setGroup(1)
målPosterNådd = false
