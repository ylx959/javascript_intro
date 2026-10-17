//Random password Generator

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
