function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}



function playGame(playerInput) {
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } 
    else if (argMoveId == 2) {
      return 'papier';
    } 
    else if (argMoveId == 3) {
      return 'nożyce';
    } 
    
  }

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } 
  else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } 
  else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  }
  else if (argPlayerMove ==  argComputerMove ) {
    printMessage('Remis!');
  }
  
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

var randomNumber = Math.floor(Math.random() * 3 + 1);
var computerMove = getMoveName(randomNumber);
var playerMove = getMoveName(playerInput)

displayResult(playerMove, computerMove);
}

var buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){
  playGame('1')
});

var buttonRock = document.getElementById('button-paper');
buttonRock.addEventListener('click', function(){
  playGame('2')
});

var buttonRock = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function(){
  playGame('3')
});