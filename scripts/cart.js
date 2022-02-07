

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cart")

function populateCart(cart) {

    cart.map((elem, i) => {

        let card = document.createElement("div")
        card.className = "card";

        let image = document.createElement("img");
        image.className = "image"
        image.src = elem.strMealThumb;
        // console.log(elem)

        let name = document.createElement("p");
        name.className = "name";
        name.innerText = elem.strMeal;
        name.style.fontWeight = "bold"


        let priceA = document.createElement("p")
        priceA.className = "priceA"
        priceA.textContent = "₹" + elem.price;


        let removeFromCart = document.createElement("button")
        removeFromCart.id = "remove";
        removeFromCart.innerText = "Remove"
        // console.log(elem);
        removeFromCart.addEventListener("click", () => {
            removeFromCartFn(i);
        });


        card.append(image, name, priceA, removeFromCart);


        cartDiv.append(card);




    });

}
populateCart(cart);

function removeFromCartFn(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    populateCart(cart);
    location.reload();

}

let totalValue = cart.reduce((ac, cv) => {

    return ac + cv.price;

}, 0);
let totalDiv = document.querySelector("#total")
totalDiv.innerText = `${totalValue} Rs`


