//Enter site with id statement

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">    <!--rel stand for relationship-->
// </head>
// <body>
   

//     <lable>enter the time:</lable>
//     <input id="input">
//     <button type="submit" id="submit">submit</button><br>
//     <p id="result"></p>
//     <script src="index.js"></script>
// </body>
// </html>


//If statements

// let time;

// const myButton=document.getElementById("submit");

// myButton.onclick=function(){
//     time = Number(document.getElementById("input").value);

//     if (Number.isNaN(time)) {
//         console.log("Please enter a number");
//         return;
//     }

//     if(time<12){
//     console.log(`Good morning`);
//     }
//     else{
//         console.log("Good afternoon");
//     }

// }

// let isStudent=false;

// if(isStudent){
//     console.log("you are a student! ");
// }
// else{
//     console.log("you are not a student");
// }

let age;

const myButton=document.getElementById("submit");
const myText=document.getElementById("input");
const resultText=document.getElementById("result");

myButton.onclick=function(){
    age = Number(myText.value);

    if (Number.isNaN(age)) {
        resultText.textContent="Please enter a number";
        return;
    }

    if(age>=120){
        resultText.textContent="you are already dead.";
    }
    else if(age==0){
        resultText.textContent="You can't enter.You were just born.";
    }
    else if(age>=18){
        resultText.textContent="You are old enough to enter this site";
    }
    else if(age<0){
        resultText.textContent="Your age can't be below 0";
    }
    else{
        resultText.textContent="You must be 18+ to enter this site";
    }
}
