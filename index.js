function rollDice(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImage=document.getElementById("diceImage");
    const values=[];
    const images=[];

    if(numOfDice>6 || numOfDice<1){
        window.alert("please enter the number between 1 and 6");
        return;
    }

    for(let i=0;i<numOfDice;i++){
        let temp = Math.floor(Math.random() * 6) + 1;

        values.push(temp);
        images.push(`<img src="dice_image/dice-six-faces-${temp}.png">`);
    }

    let total=0;

    for(let value of values){
        total+=value;
    }

    //display dice values
    diceResult.textContent=`Total: ${total}`;
    //display dice images
    //dom 回傳 <img src="${item}">
    diceImage.innerHTML=images.join(" ");

}