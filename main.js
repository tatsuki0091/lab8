let dog = "Dog";
let cat = "Cat";
let swallow = "Swallow";
let tiger = "Tiger";
let python = "Python";

var x, y, x
x = 49
y = 20
z = 19

var answer = 30 + 20 * 10 

document.getElementById("animal1").innerHTML = dog;
document.getElementById("animal2").innerHTML = cat;
document.getElementById("animal3").innerHTML = swallow;
document.getElementById("animal4").innerHTML = tiger;
document.getElementById("animal5").innerHTML = python;

document.getElementById("calculation").innerHTML = x+y-z;
document.getElementById("calculationWithVariable").innerHTML = answer;

var result = calculate(40, 20, 10);

function calculate(x, y, z) {
	return x + y - z
}

document.getElementById("calculationWithFunction").innerHTML = result;


let greet = changeGreet()

function changeGreet() {
	let greet = '';
	let hours = new Date().getHours();

	if(hours => 12) {
		greet = 'Good morning'
	} else {
		greet = 'Good afternoon'
	}
	
	return greet;

}

document.getElementById("greet").innerHTML = greet;





