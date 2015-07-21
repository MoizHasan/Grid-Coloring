

//reset the grid and prompt the user for the size.
function reset(){
var count = 0;
var height = prompt("Height of new grid?");
var width = prompt("width of new grid?");

//number of squares to add.
count = height*width;
var wrapper = document.getElementById('wrapper');

//remove existing divs.
while(wrapper.lastChild){
wrapper.removeChild(wrapper.lastChild);
	}
	
	//add divs back in.
	setDiv(count);
	var boxes = document.querySelectorAll('.box');
	for(var i=0; i<boxes.length; i++){
    boxes[i].style.width = 100/width + "%";
    boxes[i].style.height = 100/height + "%";
	}
}

function setDiv(count) {
	//add boxes into wrapper class parent.
for (var i=0; i<count; i++){
    $(".wrapper").append('<div class ="box"></div>');
	}
	
	//set mouse event. opacity increases on each pass.
	$(".box").mouseenter(function() {
		var opacity = $(this).css("opacity");
		$(this).css("opacity", opacity*1.5);
		$(this).css("background-color", "black");
		});
}



$(document).ready(function() {
	
	//create event listener for button
	var resetButton = document.getElementById('reset');
	resetButton.addEventListener('click', function() {
	reset();	
	});
	setDiv(16);
	
});
