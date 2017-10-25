// DOM - Document Object Model

// interface btw JS and HTML, CSS
// changing HTML, CSS using JS

// mainly SELECT / MANIPULATE
var h1 = document.querySelector("h1")[0]; //1st h1

h1.style.color = "pink";

var body = document.querySelector("body");

var isBlue = true;

setInterval(function(){
	if (isBlue) {
		body.style.background = "white";
	} else{
		body.style.background = "blue";
	}
	isBlue != isBlue;
}, 1000);

//// ***********////
////    SELECT  ////
//// ***********////

// OLD METHODS

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsTagName()

// NEW METHODS (all of the above can be replicated by these...)
// document.querySelector()
// document.querySelectorAll()

// these methods create javascript objects

var tag = document.querySelector("#highlight");

// where #highlight is an 'id'
// inside of query selector these is CSS alike mechanism querySelector() will show us the 1st element

// querySelector() returns only 1st match!

//// ***********////
//// MANIPULATE ////
//// ***********////

var h1 = document.querySelector("h1");

// manipulating an object through the use of 'style' property
h1.style.color = "pink";

// on right of the equation there is alway "string type"

// h1.classList.add -> adding class to element
// h1.classList.toggle -> switch on and off classes from document object 

// tag.textContent -> changing text content of given paragraph
// tag.innerHTML -> returns also inner <strong> for example 
document.querySelector("h1").innerHTML = "<em>Hello Guys</em>"  // this is how we would write in html inside


//// ***********////
//// ATTRIBUTES ////
//// ***********////

var link = document.querySelector("a"); // anchor tag

link.getAttribute("href");

link.setAttribute("href","www.dogs.com");

// LOOP through links on web

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++){
	console.log(links[i].textContent);
}
