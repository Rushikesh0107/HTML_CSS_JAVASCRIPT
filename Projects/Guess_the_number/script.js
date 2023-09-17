let randomNumber = Math.round(Math.random() * 100 + 1)

let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = Number.parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter a Number greater than 1")
    }
    else if(guess > 100){
        alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right` + ` the number was ${randomNumber}`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOO Low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOO high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${12-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    startNewGame();
}

function startNewGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(){
        randomNumber = Number.parseInt(Math.round(Math.random() * 100 + 1));
        prevGuess = [];
        lowOrHi.innerHTML = ''
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${12-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame =true;
    })
}