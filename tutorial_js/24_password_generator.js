//Random password Generator

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">    <!--rel stand for relationship-->
// </head>
// <body>

//     <form id="container">
//         <h1>Password Generator</h1>

//         <label for="passwordLength">Length: </label>
//         <input type="number" id="passwordLength" value="12" min="2"><br>

//         <div id="options">
//             <input type="checkbox" id="includeLowercase" checked>
//             <label for="includeLowercase">Lowercase (a-z)</label><br>

//             <input type="checkbox" id="includeUppercase" checked>
//             <label for="includeUppercase">Uppercase (A-Z)</label><br>

//             <input type="checkbox" id="includeNumbers" checked>
//             <label for="includeNumbers">Numbers (0-9)</label><br>

//             <input type="checkbox" id="includeSymbols" checked>
//             <label for="includeSymbols">Symbols (!@#$)</label><br>
//         </div>
//         <br>
//         <button type="button" onclick="generate()">Generate</button>
//         <p id="result"></p>
//     </form>

//     <script src="index.js"></script>
// </body>
// </html>


function generatePassword(length,includeLowercase,includeUppercase,includeSymbols,includeNumbers){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+-=";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase ? lowercaseChars :"";
    allowedChars+=includeUppercase ? uppercaseChars : "";
    allowedChars+=includeNumbers ? numberChars :"";
    allowedChars+=includeSymbols ? symbolChars :"";

    if(length<=1){
        return `(password length must be at least 2)`;
    }

    if(allowedChars.length===0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }

    return password;
}

//DOM
const passwordLength=document.getElementById("passwordLength");
const includeLowercase=document.getElementById("includeLowercase");
const includeUppercase=document.getElementById("includeUppercase");
const includeSymbols=document.getElementById("includeSymbols");
const includeNumbers=document.getElementById("includeNumbers");
const result=document.getElementById("result");

function generate(){
    const password=generatePassword(Number(passwordLength.value),
                                    includeLowercase.checked,
                                    includeUppercase.checked,
                                    includeSymbols.checked,
                                    includeNumbers.checked);

    result.textContent=password;
}
