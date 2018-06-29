let height, width, color;
// Select color input

$('#pixelCanvas').on('click','td', function(event){
	color = $('#colorPicker').val();
	$(event.target).css('background-color', color);
});

// Select size input
// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(event){
	event.preventDefault();
	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	makeGrid(height,width);
	//console.log(height+"and"+width);
});


function makeGrid(h,w) {
	
// Your code goes here!
	
for(let h = 1; h<=height; h++){
	$('#pixelCanvas').append('<tr></tr>');
}
for(let w = 1; w<=width; w++){
	$('tr').append('<td></td>');
}

}
