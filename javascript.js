$(document).ready(function() {

$("button").click(function(event) {
	
var input = parseInt(prompt("enter a number untill FooBizz you want to calculate"));

for (var i = 1; i <= input; i++) {
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

});	
});

