
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian'

async function getDishes() {


    try {

        let data = await fetch(url);
        let dishes = await data.json();
        populate(dishes);

    }
    catch (err) {
        console.log(err);
    }


}

getDishes();
// {meals: Array(11)}
// meals: Array(11)
// 0: {strMeal: 'Baingan Bharta', strMealThumb: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg', idMeal: '52807'}


function populate(dishes) {
    let menu = document.getElementById("menu");




    dishes['meals'].map((elem) => {
        elem.price = getRandomPrice(500)

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
        priceA.className = "price"
        priceA.textContent = "₹" + elem.price;
        // console.log(price.textContent);


        let addtocartBtn = document.createElement("button")
        addtocartBtn.id = "addtocart";
        addtocartBtn.innerText = "Add To Cart"
        // console.log(elem);
        addtocartBtn.addEventListener("click", () =>{
            addToCart(elem);
        });
            

        card.append(image, name, priceA, addtocartBtn);


        menu.append(card);


    });

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(elem){
    
    cart.push(elem);
    renderCart(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
    
}
function renderCart(cart){
    
    var count = document.getElementById("count");
    count.innerText = `${cart.length}`
    
    
}

function getRandomPrice(x) {

    return Math.round(Math.random() * x);


}