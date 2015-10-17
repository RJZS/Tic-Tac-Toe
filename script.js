//ERROR: increasing level doesn't speed up game!
// generates the grid and assigns each square a co-ordinate, starting from (1,1) in the top left hand corner.
var gameover = false;
var turn = 'X';

function generate(r, c) {
	$('#grid').append("<div class='row'></div>")
	for (var i = 0; i < c; i++) {
		$('.row').append("<div class='square'></div>");
		$('.row').children('.square:last').addClass('x' + (i+1));
		$('.row').children('.square:last').addClass('y1');
	};
	var $row = $('.row');
	for (var i = 0; i < r - 1; i++) {
		$('#grid').append($row.clone());
		$row = $('.row:last');
		$row.children().removeClass('y' + (i+1));
		$row.children().addClass('y' + (i+2));
	};
};

function game() {
	$('.square').click(function() {
		if ($(this).html() == '') {
			$(this).append(turn);
			isGameOver($(this).attr('class').split(/\s+/));
			if (gameover) {
				$('#main').append(turn + ' wins!');
				turn = 'X';
				$('.square').empty();
				gameover = false;
			} else if (turn == 'X') {
				turn = 'O';
			} else {
				turn = 'X';
			};
		};
	});
};

function isGameOver(classes) {
	var x = classes[1];
	var y = classes[2];
	//Check row to see if game is over
	if (document.querySelector('.x1.' + y).innerHTML === document.querySelector('.x2.' + y).innerHTML && document.querySelector('.x1.' + y).innerHTML === document.querySelector('.x3.' + y).innerHTML) {
		gameover = true;
		console.log(1)
	};
	//Check column
	if (document.querySelector('.' + x + '.y1').innerHTML === document.querySelector('.' + x + '.y2').innerHTML && document.querySelector('.' + x + '.y1').innerHTML === document.querySelector('.' + x + '.y3').innerHTML) {
		gameover = true;
		console.log(2)
	};
	//Check diagonals (starting from top left, then starting from top right)
	if (document.querySelector('.x1.y1').innerHTML === document.querySelector('.x2.y2').innerHTML && document.querySelector('.x1.y1').innerHTML === document.querySelector('.x3.y3').innerHTML && document.querySelector('.x1.y1').innerHTML != '') {
		gameover = true;
		console.log('3')
	};
	if (document.querySelector('.x3.y1').innerHTML === document.querySelector('.x2.y2').innerHTML && document.querySelector('.x3.y1').innerHTML === document.querySelector('.x1.y3').innerHTML && document.querySelector('.x3.y1').innerHTML != '') {
		gameover = true;
		console.log(4)
	};
};

function cloneArray(arr) {  
  // Deep copy arrays. Going one level deep seems to be enough.
  var clone = [];
  for (i=0; i<arr.length; i++) {
    clone.push( arr[i].slice(0) )
  }
  return clone;
}

$(document).ready(function() {
	var square = 3;
	generate(square, square);
	game();
});


// https://github.com/imousterian/OdinProject/blob/master/Project5_3_Snake/js/snake.js
// file:///C:/Users/Rafi/Documents/Rafi%27s%20Work/Programming/Snake/index.html
