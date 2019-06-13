$(document).ready(function() {

var input = prompt("enter a number untill FooBizz you want to calculate");

if(input.indexOf(".")==-1){
	fizzbuzz(parseInt(input));
}else{
	alert("enter an integer");
}




});

function fizzbuzz(inp){

for (var i = 1; i <= inp; i++) {
	if(i%3==0 && i%5==0)
	{
		$('.output').append('fizzz buzz<br>').show();
		console.log("fizzz buzz");
	}else if(i%3==0){
		$('.output').append('fizz<br>').show();
		console.log("fizz");
	}else if(i%5==0){
		$('.output').append('buzz<br>').show();
		console.log("buzz");
	}else{
		$('.output').append(i+"<br>").show();
		console.log(i);
	}

}

}