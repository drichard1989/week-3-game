//This is the variable for the amount of wins. This increases when the letter is correctly guessed. 
	var winCount = 0;

	//This is the variable for the amount of losses. This increases when the letter is not guessed in 9 tries, resulting in a game over type scenario, and game overs are counted as losses.
	var lossCount = 0;

	//This is the variable for the amount of guesses the user has left. This decreases for every incorrect onKeyUp. 
	var guessCounter = 9;

	//This variable accumulates every letter that is guessed incorrectly into an array that the user can see. 
	var guessesSoFar = [];

	//This variable is the array for all the possible computer choices has to choose from, which will be used later in a Math.random function.
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//Here we are declaring a function that returns a random letter from the array above named compChoice.

	function generateComputerChoice() {
		var compChoice = letters[Math.floor(Math.random()*letters.length)];
		return compChoice;
	}

	compChoice = generateComputerChoice();

	//Here we create the function that occurs when the user runs out of guesses. The guess counter is reset to 9, the guesses so far are reset to none, and it randomly generates another letter using the function above. 
	function gameOver() {
		guessCounter = 9;
		guessesSoFar = [];
		//How come you cant just call the function below? Instead you have to call the variable and make it equal to the function declared above. Don't get. Tried to simply write generateComputerChoice(); and it wouldnt work, dont know why. Also tried to write just compChoice; and that didnt work either. 
		compChoice = generateComputerChoice();
	}


	//Here we create a reset function that occurs when the user guesses correctly. 
	function biWinning() {
		guessCounter = 9;
		guessesSoFar = [];
		//How come you cant just call the function below? Instead you have to call the variable and make it equal to the function declared above. Don't get. Tried to simply write generateComputerChoice(); and it wouldnt work, dont know why. Also tried to write just compChoice; and that didnt work either. 
		compChoice = generateComputerChoice();
	}



	
	//Here, we are stating that when the onkeyup occurs, or when the finger is lifted off the key...
	document.onkeyup = function(event) {

		//Create a string from the character code and turn it to a lower case letter. 
		var userChosen = String.fromCharCode(event.keyCode).toLowerCase();

		//Also, reduce the guess counter by one reflecting a guess has been used. 
		guessCounter--;

		//Also, push the userChosen to the guessesSoFar array for them to see in the document.
		guessesSoFar.push(userChosen);

		// An if statement that says if the userguess is correct, or = to the computer choice, then increase the win count by 1, display in a popup on the screen a message, and run the funcion biWinning, which was declared above. 
		if(userChosen === compChoice) {
				winCount ++;
				alert ("You sly minx!")
				biWinning();

		//An else statement saying that if the if statement above doesnt run, then...
		} else {
			//If the guess count gets to be below 0, then increase the loss by 1, and alert a condescending message, and run the funcion gameOver, which was declared above. 
			if(guessCounter < 0) {
				lossCount ++ ;
				alert("Game Over idiot!");
				gameOver();
			}		
		}	

			//This will input the variables declared into the html id's we declared earlier, each in their proper spot. 
			document.querySelector("#winCount").innerHTML = winCount;
			document.querySelector("#lossCount").innerHTML = lossCount;
			document.querySelector("#guessCounter").innerHTML = guessCounter;
			document.querySelector("#guesses").innerHTML = guessesSoFar;
	}
