let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


// function for computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];

    const randomIdx= Math.floor(Math.random()*3);

    return options[randomIdx];

}






// main game play function
const playGame=(userChoice)=>{
    // console.log("user choice=",userChoice)

    const compChoice= genCompChoice();

    // console.log("comp choice=",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            // computer have(scissors , parer)(: ye lekin kye liye use hota hai)
            userWin= compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //computer have(scissors, rock)
            userWin=  compChoice==="scissors" ? false : true;
        } else{
            //computer have (rock, paper)
            userWin= compChoice==="rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}




// user choice get krne wala function
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{

        const userChoice=choice.getAttribute("id");
        console.log("choice is clicked",userChoice); 
        
        playGame(userChoice);

    })
})


const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText="Game was Draw!.Play again"
    msg.style.backgroundColor="#081b31";


}




// show winner function
const showWinner = (userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win ")
        msg.innerText=`You win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
                
        // console.log("you lose")

        msg.innerText=`You lose. ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";



    }
}