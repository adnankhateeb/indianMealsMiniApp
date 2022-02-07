

let name = document.getElementById("name")
let number = document.getElementById("number")
let address = document.getElementById("address")
let form = document.querySelector("form")

form.addEventListener("submit", submitFn)


function submitFn(event){

    event.preventDefault();

    setTimeout(() => {
        alert("Your order is accepted")
    },000)

    setTimeout(() => {
        alert("Your order is being cooked")
    },3000)

    setTimeout(() => {
        alert("Your order is ready")
    },8000)

    setTimeout(() => {
        alert("Order out for delivery")
    },10000)

    setTimeout(() => {
        alert("Order delivered")
    },12000)

}