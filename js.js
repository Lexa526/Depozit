let pButton = document.querySelector(".result")
pButton.addEventListener("click", (e) => {
let r = document.querySelector(".r").value
let pv = document.querySelector(".pv").value
let n = document.querySelector(".n").value
let fv = pv * (1 + ((r*n)/100))
alert (fv)
})
let aButton = document.querySelector(".result1")
pButton.addEventListener("click", (e) => {
let r = document.querySelector(".r1").value
let pv = document.querySelector(".pv1").value
let n = document.querySelector(".n1").value
let m = document.querySelector(".m").value
let fv = pv * ((1 + ((r/m)/100)) ** (n *m))
alert (fv)
})