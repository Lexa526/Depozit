let pButton = document.querySelector(".result")
pButton.addEventListener("click", (e) => {
let r = document.querySelector(".r").value
let pv = document.querySelector(".pv").value
let n = document.querySelector(".n").value
let fv = pv (1 + ((r*n)/100))
alert (fv)
})