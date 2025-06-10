let userScore = 0;
let computerScore = 0;
const userScoreParagraph = document.querySelector('#user-score');
const computerScoreParagraph = document.querySelector('#comp-score');

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const playGame= ( userChoice)=>{
    const compChoice=genComputerChoice();
    console.log(`Computer choice: ${compChoice}`);
    if(userChoice === compChoice) {
        drawGame();    }
        else{
            let userWins = true;
            if(userChoice==='rock')
            {
               userWins= compChoice==='paper' ? false : true;
            }
            else if(userChoice==='paper')
            {
                userWins= compChoice==='scissors' ? false : true;
            }
            else if(userChoice==='scissors')
            {
                userWins= compChoice==='rock' ? false : true;
            }
            showWinner(userWins, userChoice, compChoice);



        }


}
const showWinner =(userWins,userChoice,compChoice)=>{
    if(userWins)
    {
        console.log("User wins!");
        msg.textContent = "You win! " + userChoice + " beats " + compChoice;
        msg.style.backgroundColor = "green";
        userScoreParagraph.textContent = ++userScore;
    }
    else{
        console.log("Computer wins!");
        msg.textContent = "Computer wins! " + compChoice + " beats " + userChoice;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        computerScoreParagraph.textContent = ++computerScore;
        
    }

}
const drawGame = () => {
    console.log("It's a draw!");
    msg.textContent = "It's a draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}
const genComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];


}

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const userChoice = this.id;
        console.log(`User choice: ${userChoice}`);
        playGame(userChoice);



        
    });
});
