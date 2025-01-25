//To give access control/permission to a specific section like in websites based on user role: e.g admin or users, etc.

let isAdmin = true;
let isEditor = false;

if (isAdmin || isEditor){
    console.log("Access Granted!");
}
else{
    console.log("Access Denied.");
}
