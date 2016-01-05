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

var article = document.createElement("article");
var fieldset = document.createElement("fieldset");
var legend = document.createElement("legend");
var h3 = document.createElement("h3");


 //<article>
 //       <fieldset>
 //           <legend>Monday Burger</legend>
 //           <h3>Pepper burger</h3>
 //           <span></span>
 //           <div class="price" id="monday">19.90</div>
 //       </fieldset>
 //   </article>
 //   <article>