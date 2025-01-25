const username = "Damilola";
const password = "Naija";



let attempt = 0;
const maxAttempt = 3;


while (attempt < maxAttempt){

    //test case
    let inputUsername = prompt("Enter your username");
    let inputPassword = prompt("Enter your password");

    if (inputUsername === username && inputPassword === password){
        console.log('Login successful!');
        break;
    }
    else{
        attempt++;
        console.log(`Invalid credentials. ${attempt} of ${maxAttempt}.`);
    }
    ;
    if (attempt === maxAttempt){
        console.log("Account Locked!")
    }
}


















// for (let attempt = 0; attempt <= maxAttempt; attempt++){
//     if (username && password !== inputUsername && inputPassword){
//         console.log("Invalid username or password. Try again.")
//     }
// }

// //To check if both username and password are correct to pass the system

// else if (inputPassword && inputUsername !== username && password){
//     console.log("")
// }
// else{
//     console.log('You tried three times. You\'re automatically logged out')
// }
