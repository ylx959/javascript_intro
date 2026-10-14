


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">    <!--rel stand for relationship-->
// </head>
// <body>
//     <label id="count">0</label>
//     <br/>
//     <div id="buttonContainer">
//         <button id="decrease" class="buttons">DECREASE</button>
//         <button id="reset" class="buttons">RESET</button>
//         <button id="increase" class="buttons">INCREASE</button>
//     </div>
    
//     <script src="index.js"></script>
// </body>
// </html>


//Counter program
const decreaseBtn=document.getElementById("decrease");
const increaseBtn=document.getElementById("increase");
const resetBtn=document.getElementById("reset");
const countLabel=document.getElementById("count");

let count=0;

decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}

//let count=0;
// document.getElementById("increase").onclick=function(){
//     count++;
//     document.getElementById("count").textContent=count;
// }

// document.getElementById("decrease").onclick=function(){
//     count--;
//     document.getElementById("count").textContent=count;
// }

// document.getElementById("reset").onclick=function(){
//     count=0;
//     document.getElementById("count").textContent=count;
// }