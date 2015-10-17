for (var j = 1; j < 4; i++) {
		if ($('.x' + j + '.y1').html() === $('.x' + j + '.y2').html() && $('.x' + j + '.y1').html() === $('.x' + j + '.y3').html() && $('.x' + j + '.y1').html() != '') {
			gameover = true;
			console.log(j + '2')
		};
	};
	if ($('.x1.y1').html() === $('.x2.y2').html() && $('.x1.y1').html() === $('.x3.y3').html() && $('.x1.y1').html() != '') {
		gameover = true;
		console.log('3')
	};
	if ($('.x3.y1').html() === $('.x2.y2').html() && $('.x3.y1').html() === $('.x1.y3').html() && $('.x3.y1').html() != '') {
		gameover = true;
		console.log(4)
	};

		//Check columns
	for (var j = 1; j < 4; i++) {
		if (document.querySelector('.x' + j + '.y1').innerHTML === document.querySelector('.x' + j + '.y2').innerHTML && document.querySelector('.x' + j + '.y1').innerHTML === document.querySelector('.x' + j + '.y3').innerHTML && document.querySelector('.x' + j + '.y1').innerHTML != '') {
			gameover = true;
			console.log(j + '2')
		};
	};
	//Check diagonals (starting from top left, then starting from top right)
	if (document.querySelector('.x1.y1').innerHTML === $('.x2.y2').innerHTML && document.querySelector('.x1.y1').innerHTML === document.querySelector('.x3.y3').innerHTML && document.querySelector('.x1.y1').innerHTML != '') {
		gameover = true;
		console.log('3')
	};
	if (document.querySelector('.x3.y1').innerHTML === document.querySelector('.x2.y2').innerHTML && document.querySelector('.x3.y1').innerHTML === document.querySelector('.x1.y3').innerHTML && document.querySelector('.x3.y1').innerHTML != '') {
		gameover = true;
		console.log(4)
	};