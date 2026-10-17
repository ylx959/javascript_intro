//HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">    <!--rel stand for relationship-->
// </head>
// <body>

//     <div id="container">
//         <h1>Dice Roller</h1>
//         <label># of dice: </label>
//         <input type="number" id="numOfDice" value="1" min="1" max="6">
//         <button onclick="rollDice()">Roll Dice</button>
//         <div id="diceResult"></div>
//         <div id="diceImage"></div>
//     </div>
   
//     <script src="index.js"></script>
// </body>
// </html>

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