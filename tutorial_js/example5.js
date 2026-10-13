//     <h1 id="myH1">Enter the radius of a circle</h1>
//     <label>radius: </label>
//     <input type="text" id="myText"><br><br>
//     <button id="mySubmit">enter</button>
//      <h3 id="myH3"><h3>
//     <script src="index.js"></script>



//const=a variables that can't be changed
//calculate the circle's diameter
const PI=3.14;
let radius;
let circumference;


document.getElementById("mySubmit").onclick=function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference=radius *2* PI;
    document.getElementById("myH3").textContent=`the diameter is ${circumference}`
}