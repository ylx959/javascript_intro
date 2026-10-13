//  <h1 id="myH1">Welcome</h1>
//    <label>username :</label>
//    <input id="myText">
//    <button id="mySubmit">submit</button>



//How to accept user inout 

//1.Easy way =window prompt
//2. Professional way=Html textbox

let username;

// username=window.prompt("what's your username ?");
// document.getElementById("name").textContent=`Hello,${username}`;

document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello, ${username}`
}