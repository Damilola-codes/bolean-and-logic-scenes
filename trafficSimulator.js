let isGreenLight = false;
let isRedLight = true;

//Now, this conditions checks if cars can move
if (isGreenLight && !isRedLight){
    console.log("You can go!");
}
else if(!isGreenLight && isRedLight){
    console.log("Stop! Wait for the green light");
}
else{
    console.log("Proceed with caution")
}