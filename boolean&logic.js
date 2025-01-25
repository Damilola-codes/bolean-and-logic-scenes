// let username = 'admin';
// let password = '1234';

// console.log(username === 'admin' && password === '1234');

// //Checking user's input
// let input = '';
// console.log(input || 'No input provided');

// //using function
// function isEven(num){
//     return num % 2 == 0;
// }
// console.log(isEven(5) || isEven(4));

// function isOdd(num){
//     return (num % 2 !== 0);
// }
// console.log(isOdd(30) || isOdd(30));

// //Multiple OR conditions
// let hasPen = false;
// let hasPencil = false;
// let hasMarker = true;

// console.log(hasPen || hasPencil || hasMarker);


// //NOT(!)

// //Inverting to true or false
// console.log(!true);//false
// console.log(!false);//true

// //Double NOT
// console.log(!!true);//false

// //Checking empty strings
// let text = '';
// console.log(!text)//True (because an empty string is falsy)

// let username_ = 'user';
// console.log(!username_);

// let isOnline = false;
// if (!isOnline){
//     console.log('User is  offline')
// }
// else{
//     console.log('User is online')
// }

// let isAdmin = false;
// console.log(!isAdmin && 'Access Denied!');

// let isGuest = true;
// console.log(!isGuest || 'Welcome, guest!');



//Personal Assessment on AND(&&) Operator
// console.log(10 > 5 && 20 > 15);//true

// console.log(7 > 10 && 5 > 3);//false

// let isAdult = true;
// let isID = false;
// console.log(isAdult && isID);//false

// console.log('hello' === 'hello' && 'world' === 'world');//true

// let x = 5;
// console.log(x > 0 && x < 10);//true

// console.log(false && true);//false

// console.log(100 === 100 && 50 !== 30);//true

// let loggedIn = true;
// let isAdmin_ = false;
// console.log(loggedIn && isAdmin_);//false

// console.log(8 % 2 === 0 && 9 % 3 === 0);//true

// let hasMoney = true;
// let hasTime = false;
// console.log(hasMoney && hasTime);//False

//Personal assessment on OR(||) Operator

// console.log(10 < 5 || 20 > 15);//true

// console.log(7 > 10 || 5 > 3);//true

// let isWeekend =  false;
// let isHoliday = true;
// console.log(isWeekend || isHoliday);//TRUE

// console.log('apple' === 'banana' || 'grape' === 'grape');//true

// let age = 17;
// console.log(age < 18 || age > 60);//true

// console.log(false || true);//true

// console.log(100 !== 100 || 50 === 30);//false

// let loggedIn_ = false;
// let isGuest_ = true;
// console.log(loggedIn_ || isGuest_);//true

// console.log(8 % 2 !== 0  || 9 % 3 === 0);//true

// let hasTicket = false;
// let KnowsOrganizer = false;
// console.log(hasTicket || KnowsOrganizer);//false


console.log(!true);//false

console.log(!false);//true

let isStudent = true;
console.log(!isStudent);//false

console.log(!'');//true

console.log(!"hello");//false

console.log(!0);//true

console.log(!1);//false

let isAvailable = false;
console.log(!isAvailable);//true

console.log(!(5 > 3)); //false

let hasAccess = true;
console.log(!hasAccess);//false