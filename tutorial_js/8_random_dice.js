//DICE program

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">    <!--rel stand for relationship-->
// </head>q
// <body>
   
//     <button id="myButton">roll</button>
//     <br/>
//     <label id="label1" class="myLabel"></label>
//     <br>
//     <label id="label2" class="myLabel"></label>
//     <br>
//     <label id="label3" class="myLabel"></label>
//     <br>
//     <lable class="myLabel">sum:</lable>
//     <label id="sum" class="myLabel"></label>

    
//     <script src="index.js"></script>
// </body>
// </html>

//Random

const myButton=document.getElementById("myButton");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const sum=document.getElementById("sum");

const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick=function(){
    randomNum1=Math.floor(Math.random() *max)+min;
    randomNum2=Math.floor(Math.random() *max)+min;
    randomNum3=Math.floor(Math.random() *max)+min;
    label1.textContent=randomNum1;
    label2.textContent=randomNum2;
    label3.textContent=randomNum3;
    sum.textContent=randomNum1+randomNum2+randomNum3;
}