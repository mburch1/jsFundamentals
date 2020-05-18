/*
TYPES

1-grammerAndTypes
    03-types.js
*/

//Boolean
var on = true;
console.log(on);

let off = flase;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, 0/1

//Undefined
/*
undefined usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null

/*
Null means avariable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty);

/*
Null and undefined voth represent variables with no walue indide. Think of it this way--mull values are for gag gifts
that are baxes intentionally given with nothing inside (because that's the gag).
Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!).
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);
 
let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 *10 + 0.1 * 10) /10;
console.log(numbersAreHard);

//Strings
//String is any value within quates; JS spiits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo); 

//string concatenation vs addition
let first = 1050 +
let second = "1050" + "100";

console.log(first);
console.log(second);

let tird = 1050 + '100';
console.log(third);
console.log(typeof third);

//Interpolation
//Lets you use strings with dynamic content (they require backticks)

//example 1
let age = 32;
let string = `my age is: ${age}`
console.log(string);


//Objects
/*
what is an object?

an object is a container that stores names and their values
(it can hold multiple data types)

Denoted by {}
Have keys and values--color( key): "blue" (value), separeted with a colon, each
key-value pair is separated with a comma 
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.color);
console.log(typeof hulk);

//Arrays
/*
arrays store multiple walues in an ordered way. They, too, hold multiple data types.

Denoted by []
Has values ('blue', 'green', 'yellow'), seperated by commas
*/

var stepsToBrushTeeth =['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']
//array insexing        0                     1                     2              3        4                     
//console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(typeof stepsToBrushTeeth);