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
//DRINKS
//Subs 



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