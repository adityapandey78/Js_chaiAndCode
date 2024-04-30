//Generating a random number multiplying iut by 100 coz we want to get two digit number anfd adding 1 for the case when we get number as 0.004 so that output remains at least 1
let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(); //pehle server pe message jane se rokna hai
        const guess=parseInt(userInput.value); //user input to ek variable me store krana
        validateGuess(guess); // now passing the value into validate guess
    });

}

function validateGuess(guess){
    //it will validate the guesses if value is b/w 1-100 or not
    if(isNaN(guess)){
 alert('Please enter a valid Number')
    }
    else if(guess<1){
        alert('Please Enter the number more than 1')
    } else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);//prev guess ke array me push kr diya
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess); //ab ye pass on kr degi check guess ko
        }
    }
}

function checkGuess(guess){
    //idhr check hoga and idhr message print bhi kra skte hain
    if(guess===randomNumber){
        displayMessage(`You Guessed it right!`);
        endGame();
    } else if(guess<randomNumber){
        displayMessage(`Number is TOOO low`)
    } else if(guess>randomNumber){
        displayMessage(`Number is TOOO high!`)
    }
}

function displayGuess(guess){
    //displaying the guess
    //it cleans the input as well 
userInput.value='';
guessSlot.innerHTML+=`${guess},  `;
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
//it will directly interact with the DOM
lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();

}

function newGame(){
//it will start a new game
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
     randomNumber=parseInt(Math.random()*100+1);
     prevGuess=[];
     numGuess=1;
     guessSlot.innerHTML='';
     remaining.innerHTML=`${11-numGuess}`
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
    playGame=true;
});
}
