// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">    <!--rel stand for relationship-->
// </head>
// <body>

//     <form>
//         <h1 >Temperature conversion</h1>
//         <input type="number" id="textBox" value="0" ><br>
        
//         <input type="radio" id="toFahrenheit" name="unit">
//         <label for="toFahrenheit">Celsius -> Fahrwnheit</label><br>  
        
//         <input type="radio" id="toCelsius" name="unit">
//         <label for="toCelsius"> Fahrwnheit -> Celsius</label><br>

//         <button type="button" onclick="convert()">submit</button>
//         <p id="result"></p>
//     </form>
   
//     <script src="index.js"></script>
// </body>
// </html>

//Temperature conversion program

const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp=textBox.value;
        temp=temp*9/5+32;
        result.textContent=temp+"°F";

    }else if(toCelsius.checked){
        temp=textBox.value;
        temp=(temp-32)*5/9;
        result.textContent=temp+"°C";
    }
    else{
        result.textContent="Select a unit";
    }
}