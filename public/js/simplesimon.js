"use strict";

var simonSays = [];
var userResponds = [];

function animateSquare (square) {
	square.addClass('active');
	setTimeout(function () {
		square.removeClass('active');
	}, 250)
}

$(".square").click(function (e) {
	var squareClicked = $(this);
	animateSquare(squareClicked);
})

function simonRandom () {
	var squares = $('.square');
	var random = Math.floor(Math.random() * 4);
	simonSays.push(squares[random]);
	console.log(simonSays);
	return squares[random];
}

function simonAct () {
	var simonChoice = simonRandom();
	animateSquare(simonChoice);
}

simonActs();