﻿//happy hour logic:  &
//Adjust price function: (add .toFixed(2) for 2 decimals)

var prices = document.getElementsByClassName("price");
var today = new Date();
var discount = 0.25;

function happyHourPrices() {
    if (today.getHours() >=18 && today.getHours() <= 20 ) {
        for (var i = 0; i < prices.length; i++) {
            
        }
    }
}
//Method calls:

happyHourPrices();


/*Add pictures function to span:*/
var spansToBeChanged = document.getElementsByTagName("span");



/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/