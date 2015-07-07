"use strict";

var simonSays = [];
var userIndex = 0;

//  user logic

$(".square").click(function (e) {
	var squareClicked = $(this).attr('id');
	animateSquare(squareClicked);

	if (squareClicked == simonSays[userIndex]) {
		userIndex += 1;
		if (userIndex == simonSays.length) {
			simonsTurn();
			userIndex = 0;
		}
	} else {
		gameOver();
	}

});

function animateSquare (id) {
	$('#' + id).addClass('active');
	setTimeout(function () {
		$('#' + id).removeClass('active');
	}, 250)
}


// simon logic
function simonRandom () {
	var squares = $('.square');
	var random = Math.floor(Math.random() * 4);
	var buttonToAnimate = squares[random];
	var id = buttonToAnimate.getAttribute('id');
	simonSays.push(id);
}

function simonPlays () {
	$('#round').text("Round(s): " + simonSays.length);
	var i = 0;
	var intervalId = setInterval(function () {
		if (i >= simonSays.length) {
			clearInterval(intervalId);
		}
		animateSquare(simonSays[i]);
		i += 1;
	}, 250);
}

function simonsTurn () {
	simonRandom();
	simonPlays();
}

function gameOver() {
    location.reload(true);
	alert('GAME OVER! You made it ' + simonSays.length + ' rounds! Thanks for playing!')
}

$('#play').click(function (e) {
	simonSays = [];
	simonsTurn();
});
