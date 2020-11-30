//Single Line Comment
const greeting = "Hello";
const place = "World";
let x = 4;
//usually should use let instead of var
var y = 2;
/*
Multi Line Comment
*/

console.log("Hello World");
console.log("%s World", greeting);
console.log("%s %s", greeting, place);
console.log(`${greeting}, ${place}`);

// Strings
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2);

let num1 = 1;
let num2 = "2";
console.log(num1 + num2);
console.log(num1 + 1);

//template literals
let bool1 = true;
console.log(`This is a template literal ${str1} ${str2}`);
console.log(`1 + 1 is ${1 + 1}`);
console.log(`The opposite of ${bool1} is ${!bool1}`);

//Equality Gotchas
let xx = 0 == ""; //true coerced

let yy = 0 === "";
false; // type respected
//recommended you use triple = when doing type testing

// new example
const people = ["John", "Mary", "Frank"]; //create array
const one = 1;
const oneone = new Number(1);
const str = "Hello World";
const bool2 = true;
const person = {
  firstName: "Aaron",
  lastName: "Powell",
};

function sayHello(person) {
  console.log("Hello " + person.firstname);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof oneone);
console.log(typeof str);
console.log(typeof bool2);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number); //Defined differently above
console.log(oneone instanceof Number); //defined differently above
console.log(str instanceof String);
console.log(bool2 instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

//basic math
let num1 = 100;

console.log(++num1); //increment by 1
console.log(--num1); //decrement by 1
console.log(num1 % 1500); //remainder
//using "Math Object"
console.log(Math.PI); //PI
console.log(Math.squrt(num1)); //Square Root

//Convert Strings to Integers
let num1 = "150";
console.log(parseInt("100"));
console.log(parseInt(num1));
console.log(parseInt("ABC")); //returns NaN
console.log(parseInt("0xF")); //Hexadecimal
console.log(parseInt("1.5")); //returns just 1.  Stops after special char
console.log(parseInt("1 + 1")); //returns just 1. Stops after special char
console.log(parseInt(`${1 + 1}`)); //returns 2

//Convert Strings to Floats (decimals)
let flo1 = "1.50";
console.log(parseFloat("1.00"));
console.log(parseFloat(flo1));
console.log(parseFloat("ABC")); //returns NaN

//convert numbers to strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());


//Exception - where and when went wrong (thrown by JS or by developer)
//Error - what went wrong

throw 'myException';
throw true;
//Try - block of code that may throw exception
//Catch - block of code that will run if there is an exception
//Finally - Runs after try or catch and RUNS EVERY TIME even if exception is not thrown

try {
    criticalCode();    //could throw exception
}
catch (ex){
    console.log("Got an error");
    logError(ex);
}

//example 2
try {
  criticalCode();    //could throw exception
  //or:   throw "I just caused an exception manually"
}
catch (ex){
  console.log("Got an error");
  logError(ex);
}
finally {
  console.log("code that will always run")
}


//Dates and Times
//One central OBJECT - Date
//Date contains both date and time and stored as ms since 1 Jan 1970
const now = Date();  //gets right now
//year, month, date, 24hour, min, sec
//IMPORTANT starts with 0; month 3 = APRIL
const randomDate = new Date(2016, 3, 12, 6, 25, 28); 
const win95Launch = new Date(1995,7,24);  //August (starts with 0)
console.log(randomeDate)
console.log(win85Launch)
//since object we have methods to SET values
now.setFullYear(2015); //sets year
now.setMonth(3); //April
now.setDate(4);  //sets day
now.setHours(4);  //24 hour clock
now.setMinutes(24);
now.setSeconds(22);
console.log(now);  //displays in UTC offset
//Getting Time values
console.log(now.getMonth())
console.log(now.getTime()); //ms since 1 Jan 1970
console.log(nowgetDay()); //day of week (Sunday = 0)


//Boolean
// == tests equality regardless of data type
// === test equality and data type

// '42' == 42    is "TRUE"
// '42' === 42  is "FALSE"

// Best Practice is to use triple = (===)

// !=  non-equality regardless of data type
// !== non-equality and checks data type


//If
const status = 200
if (status === 200) {
    console.log('OK');
} else if (status === 400) {
  console.log('Error')
} else {
  console.log ('Unknown Status')
};

//No {} needed if using a single line
if (status === 200) console.log ('OK!');
else if (status === 400) console.log ('Error');
else console.log ('Unknown Staus');

//Ternary (instant)
const message = (status === 200) ? 'OK' : 'Error';

