var btn = document.querySelector("button");

btn.addEventListener("click",function(){
	document.body.classList.toggle("switchOn");
})

// other way the toggle can work

var btn = document.querySelector("button");
var isPurple = false;

btn.addEventListener("click",function(){
	if (isPurple) {
		document.body.style.background = "white";
	} else{
		document.body.style.background = "purple";
	}
	isPurple != isPurple
})
