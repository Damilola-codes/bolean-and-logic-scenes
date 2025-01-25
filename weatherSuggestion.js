let isRaining = false;
let temperature = 90;

//This program will give weather advice
if (!isRaining && temperature > 20){
    console.log("It's a great day for a walk!");
}
else if (isRaining){
    console.log("Hope you have your umbrella with you.");
}
else{
    console.log("It's cool out there, wear a jacket");
}
