//while loop

// let username="";

// while(username===""){
//     username=window.prompt("Enter you name:");
// }

// console.log(`Hello ${username}`);

let loggedIn=false;
let username;
let password;

do{
    username=window.prompt("Enter your username");
    password=window.prompt("Enter your password");

    if(username==="myUsername" && password=== "myPassword"){
        loggedIn=true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials ! Please try again");
    }
}while(!loggedIn);

//for loop

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue;
        //break;
    } else {
        console.log(i);
    }
}
