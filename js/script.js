function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}



var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} 
if (randomNumber == '2') {
    computerMove = 'papier';
  }
if (randomNumber == '3') {
    computerMove = 'nożyce';
  }
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} 
if (playerInput == '2') {
    playerMove = 'papier';
}
if (playerInput == '3') {
    playerMove = 'nożyce';
}  
printMessage('Twój ruch: ' + playerMove);