/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl
2. Add som tags that doesn't change the visual part of the paragraph.  //Struken

3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
4.Add a stylesheet that displays the changed words in fat font and in red.
5. PLay with the Methods 

Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/
//Uppgift 3:
//Properties
//alert("inre höjd " + window.innerHeight + " pixlar");
//alert("Den nuvarande URL:en är: " + window.location);
//alert("Hur långt sidan scrollats : " + window.pageYOffset);
//var text = document.getElementById("testar");
//text.innerHTML = "Inre bredden på sidan: " + window.innerWidth;
//// Dessa ligger inte i CSSen pga att den kom senare i uppgiften. 
//text.style.color = "pink";
//text.style.backgroundColor = "black";

//Uppgift 4:
//    <link href="StyleSheet1.css" rel="stylesheet" />  - ligger i htmlfilen..

//Uppgift 5
//Metoderna
//window.print("Print me!");
//window.open("http://www.hd.se");
//window.alert("Hejsan!");

/*
### DOM page 126:###
6. Play with the DOM-properties

### String objects page 128, 129: ###


*/

//Uppgift 6:
//alert("Dokumentets titel är: " + document.title);
//alert("Senast detta dokumentet ändrades var: " + document.lastModified);
//alert("Nuvarande URL:en för dokumentet: " + document.URL);
//alert("Nuvarande domänen för dokumentet: " + document.domain);

//document.write("Här skriver jag till dokumentet!");
//alert(document.querySelectorAll("#test"));

////String Objects :
//var testString = "hejsanhejsan på dig svejsan!";
//alert("Längden på en string: " + testString.length);
//var toUpper = "denna textsträngen ska bli upperCase";
//alert(toUpper +" : "+toUpper.toUpperCase());
//var toLower = "denna textstärngen ska bli i lowerCase.";
//alert(toLower + " : " + toLower.toLowerCase());

//var chars = "hejhejhej";
//alert(chars[2]);
//alert(chars.indexOf("ej"));
//alert(chars.lastIndexOf("h"));

//var saying = "Hejsan Freddie";
//alert(saying +". Den texten ska bli i stora bokstäver => "+ saying.toUpperCase());
//alert("Bokstaven på femte positionen i strängen '"+ saying + "' är: "+ saying.charAt(5));
//alert("Detta ska ta ut bokstäverna mellan 3,10:  '" + saying.substring(3, 10) + "'");

//Uppgift 7:
var array = document.getElementById("makeMeAnArray").innerHTML.trim().split(" ");
alert("Längden på arrayen: " + array.length);
alert("Ordet på position 3 i uppercase: "+array[3].toUpperCase());
alert("Ordet på position 9 i lowercase: " + array[9].toLowerCase());
alert( array[0]).charAt(4);
console.log(array[0].indexOf("l"));
console.log( array[0].lastIndexOf("n"));





//7. Save the the text from the makeMeAnArray-paragraph into an array.
//8. Use all the string methods and propertys allong with the array

//### String objects page 132: ###
//9. check if the 4th element in the array is a number

//### Math page 134: ###
//10. Round one of the numbers in the paragraph up/down
//11. replace the 3rd word with PI then roud it to the nearest integer

//### Date object###
//12. Calculate how many days it's until your birthday and present it.
//13. Calculate how many minutes old you are and present it.