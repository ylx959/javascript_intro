//number guessing game

const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt("Guess the number 1 to 100:");
    guess=Number(guess);
    console.log(typeof guess,guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess>maxNum || guess<minNum){
        window.alert("Please enter a valide number");
    }
    else{
        attempts++;
        if(guess===answer){
            running=false;
            window.alert(`Right ! you tried ${attempts} time`);
        }
        else if(guess>answer){
            window.alert("Guess smaller");
        }
        else if(guess<answer){
            window.alert("Guess bigger");
        }
    }

}