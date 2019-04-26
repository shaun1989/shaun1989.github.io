// my game //
// players choice //
function playgame() {
var player = prompt();
 if (player !== null) {
	player.toLowerCase();
 } else {
	alert("please enter a value");
 } 
// computer choice //
var computer = Math.random();
if (computer <= (1/3)) {
computer = "Rock";
} else if (computer <= (2/3)) {
computer = "Paper";
} else  {
computer = "Scissors";
}
// game function //
var game = function playround (player , computer) {
	if (player == "Rock" && computer == "Scissors") {
	return "Player wins";
} else if (player == "rock" && computer == "Scissors") {
	return "Player wins";
} else if (player == "Paper" && computer == "Rock") {
	return "Player wins";
} else if (player == "paper" && computer == "Rock" ) {
	return "Player wins";
} else if (player == "Scissors" && computer == "Paper" ) {
	return "Player wins";
} else if (player == "scissors" && computer == "Paper" ) {
	return "Player wins";
} else if (player == "rock" && computer == "Rock") {
    return "Tie";
} else if (player == "paper" && computer == "Paper") {
    return "Tie";
} else if (player == "scissors" && computer == "Scissors") {
    return "Tie";
} else if (player == computer) {
	return "Tie";
} else {
	return "computer wins"
}
};
var results = game(player,computer);

return document.getElementById("player").innerHTML = "<p>Players choice:"+" "+player+"</p>"+"<p>Computers choice:" + " " + computer + "</p>"+"<hr>" +"<br/>"+results+"<hr/>"+"<br/>"+"<img style = 'height:100px; width:100px;' src = 'https://media.giphy.com/media/lpPltXjvmkFC8/giphy.gif'></img>";
}