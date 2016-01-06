/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/


//Uppgift 1
var mondayBurger = {
    name: "Monday Burger",
    size: 150,
    dayOfTheWeek: "Monday",
    price : 89
}
var tuesdayBurger = {
    name: "Tuesday Burger",
    size: 250,
    dayOfTheWeek: "Tuesday",
    price: 109
}
var wednesdayBurger = {
    name: "Wednesday Burger",
    size: 110,
    dayOfTheWeek: "Wednesday",
    price: 69
}
var thursdayBurger = {
    name: "Thursday Burger",
    size: 120,
    dayOfTheWeek: "Thursday",
    price: 79
}
var fridayBurger = {
    name: "Friday Burger",
    size: 300,
    dayOfTheWeek: "Friday",
    price: 120
}
var saturdayBurger = {
    name: "Saturday Burger",
    size: 200,
    dayOfTheWeek: "Saturday",
    price: 99
}
var sundayBurger = {
    name: "Sunday Burger",
    size: 170,
    dayOfTheWeek: "Sunday",
    price: 95
}

var burgerArray = [mondayBurger, tuesdayBurger, wednesdayBurger, thursdayBurger, fridayBurger, saturdayBurger, sundayBurger];

for (var i = 0; i < burgerArray.length; i++) {
    var article = document.createElement("article");
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    var h3 = document.createElement("h3");
    var span = document.createElement("span");
    var div = document.createElement("div");

    var burgerDiv = document.getElementById("burgersPlace");
    burgerDiv.appendChild(article);
    article.appendChild(fieldset);
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);

    legend.innerHTML = burgerArray[i].dayOfTheWeek;
    h3.innerHTML = burgerArray[i].name;
    div.className += " " + "price";
    div.id = burgerArray[i].dayOfTheWeek;
    div.innerHTML = burgerArray[i].price + "kr";

}

//Uppgift 2 
function Product(name, size, price, dayOfTheWeek) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.dayOfTheWeek = dayOfTheWeek;
}

//Uppgift 3 
var cocaCola = new Product("Coca Cola", "Large", 40, "Monday");
var fanta = new Product("Fanta", "Large", 40, "Tuesday");
var sprite = new Product("Sprite", "Medium", 32, "Wednesday");
var coffee = new Product("Coffee", "Medium", 25, "Thursday");
var soda = new Product("Soda", "Small", 26, "Friday");
var appleJuice = new Product("Apple Juice", "Medium", 35, "Saturday");
var orangeJuice = new Product("Orange Juice", "Large", 42, "Sunday");

var drinksArray = [cocaCola, fanta, sprite, coffee, soda, appleJuice, orangeJuice];

for (var i = 0; i < drinksArray.length; i++) {
    var drinkArticle = document.createElement("article");
    var drinkFieldset = document.createElement("fieldset");
    var drinkLegend = document.createElement("legend");
    var drinkH3 = document.createElement("h3");
    var drinkSpan = document.createElement("span");
    var drinkDiv = document.createElement("div");

    var drinksDiv = document.getElementById("drinksPlace");
    drinksDiv.appendChild(drinkArticle);
    drinkArticle.appendChild(drinkFieldset);
    drinkFieldset.appendChild(drinkLegend);
    drinkFieldset.appendChild(drinkH3);
    drinkFieldset.appendChild(drinkSpan);
    drinkFieldset.appendChild(drinkDiv);

    drinkLegend.innerHTML = drinksArray[i].dayOfTheWeek;
    drinkH3.innerHTML = drinksArray[i].name;
    drinkDiv.className += " " + "price";
    drinkDiv.id = drinksArray[i].dayOfTheWeek;
    drinkDiv.innerHTML = drinksArray[i].price + "kr";


}

//Uppgift 4
var vesuvio = new Product("Vesuvio", "Family", 120, "Monday");
var kebab = new Product("Kebabpizza", "Original", 75, "Tuesday");
var margarita = new Product("Margarita", "Family", 135, "Wednesday");
var tonfisk = new Product("Tonfiskpizza", "Original", 82, "Thursday");
var calzone = new Product("Calzone", "Barn", 60, "Friday");
var capricciosa = new Product("Capricciosa", "Family", 130, "Saturday");
var kottfars = new Product("Köttfärspizza", "Family", 145, "Sunday");

var pizzaArray = [vesuvio, kebab, margarita, tonfisk, calzone, capricciosa, kottfars];

for (var i = 0; i < pizzaArray.length; i++) {
    var pizzaArticle = document.createElement("article");
    var pizzaFieldset = document.createElement("fieldset");
    var pizzaLegend = document.createElement("legend");
    var pizzaH3 = document.createElement("h3");
    var pizzaSpan = document.createElement("span");
    var pizzaDiven = document.createElement("div");

    var pizzaDiv = document.getElementById("pizzaPlace");
    pizzaDiv.appendChild(pizzaArticle);
    pizzaArticle.appendChild(pizzaFieldset);
    pizzaFieldset.appendChild(pizzaLegend);
    pizzaFieldset.appendChild(pizzaH3);
    pizzaFieldset.appendChild(pizzaSpan);
    pizzaFieldset.appendChild(pizzaDiven);
 
  pizzaLegend.innerHTML = pizzaArray[i].dayOfTheWeek;
  pizzaH3.innerHTML = pizzaArray[i].name;
  pizzaDiven.className += " " + "price";
  pizzaDiven.id = pizzaArray[i].dayOfTheWeek;
  pizzaDiven.innerHTML = pizzaArray[i].price + "kr";
} 



//Uppgift 5
var SubMonday = new Product("Vegetariana", "Large", 54, "Monday");
var SubTuesday = new Product("Meat loaf sub", "Large", 64, "Tuesday");
var SubWednesday = new Product("Cheese and Olive sub", "Medium", 44, "Wednesday");
var SubThursday = new Product("Bacon and cheese","Large", 66, "Thursday");
var SubFriday = new Product("Tomato Cheese Ham", "Large", 60, "Friday");
var SubSaturday = new Product("Turkey Cheese Cucumber", "Large", 55, "Saturday");
var SubSunday = new Product("Bomb of everything", "Large", 80, "Sunday");

var subArray = [SubMonday, SubTuesday, SubWednesday, SubThursday, SubFriday, SubSaturday, SubSunday];

for (var i = 0; i < subArray.length; i++) {
    var subArticle = document.createElement("article");
    var subFieldset = document.createElement("fieldset");
    var subLegend = document.createElement("legend");
    var subH3 = document.createElement("h3");
    var subSpan = document.createElement("span");
    var subDiven = document.createElement("div");

    var subDiv = document.getElementById("subsPlace");
    subDiv.appendChild(subArticle);
    subArticle.appendChild(subFieldset);
    subFieldset.appendChild(subLegend);
    subFieldset.appendChild(subH3);
    subFieldset.appendChild(subSpan);
    subFieldset.appendChild(subDiven);

    subLegend.innerHTML = subArray[i].dayOfTheWeek;
    subH3.innerHTML = subArray[i].name;
    subDiven.className += " " + "price";
    subDiven.id = subArray[i].dayOfTheWeek;
    subDiven.innerHTML = subArray[i].price + "kr";

}



//Function för forloop där man lägger till alla elementen.

function CreateElements_And_AddValuesToThem(divId, productArray, imageURL) {

    
}