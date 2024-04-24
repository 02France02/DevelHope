//JAVASCRIPT SUMMARY

//variable declaration.
//variables' names must be descriptive, written in camelCase, and cannot start with numbers or contain punctutation marks (except _) 

let a = 1;      //new notation, can be re-assigned
const b = 2;    //new notation, cannot be re-assigned
var c = 3;      //old notation, can be re-assigned

//chained variable assignments:
let d = e = f = 0;

//6 primitive data types + 2 non-primitive (objects and symbols)

let number = 1;                     //numeric type (both floating and integer). Includes Inf, -Inf, NaN (Not a Number)
let bigInt = 2**53;                 //bigInt type (numbers > 2**53 - 1 and numbers < -(2**53 - 1) )
let string = 'Hello';               //string type, uses single or double quotes
let boolean = true;                 //boolean type, can only have 2 values: true or false
let undefinedVariable = undefined;  //undefined type, equals to "value not assigned". It's the default initial value for not assigned variables.
let nullVariable = null;            //null type, equals to "nothing", "empty", or "value unknown"

//to print a variable:
console.log(string);

//casting (data type conversion)

let casting1 = String(number);         
let casting2 = Number(boolean);     //true converts to 1; false converts to 0
let casting3 = Number(string);      //a number-containing string converts to that number, otherwise converts to NaN
let casting4 = Boolean(number);     //any number converts to true (is truth-y); 0 converts to false (is false-y)
let casting5 = Boolean(string);     //if the string contains characters is truth-y, if empty it's false-y

console.log(casting1, casting2, casting3, casting4, casting5);

//to check the data type of a variable:
console.log(typeof (casting1), typeof (casting2), typeof (casting3), typeof(casting4), typeof (casting5));

//comparison of data types:
//1. comparison with coercion (forced data type conversion): == operator
//2. strict comparison (the data type must be the same): === operator

console.log('comparison with coercion:', number == boolean);     //returns true.
console.log('strict comparison:', number === boolean);           //returns false.

//It is possible that at the same time two values are equal but one is truth-y and one is false-y. 

let g = 0;              //false-y
let h = '0';            //truth-y
console.log ('(g == h)?', (g == h));    //returns true.

//basic operators:

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;
let exponentiation = a**b;

//modify-in place

a += 5;     // a = a + 5
a *= 3;     // a = a * 3
a /= 2;     // a = a / 2
a -= 1;     // a = a - 1

//increment & decrement

a++     // a = a + 1. console.log(++b) = 3
++a     // a = a + 1. console.log(b++) = 2
a--     // a = a - 1
--a     // a = a - 1

//logic operators

let condition1 = a > 0 && b < 3;        //AND: both must be true for condition1 to be true. Logic equivalent of multiplication
let condition2 = a > 0 || b < 3;        //OR: one must be true for condition 2 to be true. Logic equivalent of addition
let condition3 = !(a > 0);              //NOT: the boolean value of the following condition is inverted

//ternary/conditional operator

let result = d > 0 ? "d greater than 0" : d < 0 ? "d smaller than 0" : "d equal to 0";
console.log(result);

//if-else conditional statement

if (a > 0 && b < 3) {
    console.log('both conditions are verified');
} else if (a > 0 || b < 3) {
    console.log('only one condition is verified');
} else {
    console.log('none of the conditions is verified');
}

//switch construct: used when we have many different cases to check

let weekDay = 3; 

switch (weekDay) {
    case 1:
        console.log("it's monday");
        break;
    case 2:
        console.log("it's tuesday");
        break;
    case 3:
        console.log("it's wednesday");
        break;
    case 4:
        console.log("it's thursday");
        break;
    case 5: 
        console.log("it's friday");
        break;
    case 6:
        console.log("it's saturday");
        break;
    case 7:
        console.log("it's sunday");
        break;
    default:
        console.log("choose a week-day beetween 1 and 7");
}

//objects: non-indexed data structures.
let object = {
    key1 : 'value1',    //property 1
    key2 : 'value2',    //property 2
}

console.log(object.key1);   //to access a property of an object: object.key

//arrays: indexed data structures. They are a special type of objects.
let numbers = [1, 2, 3];

console.log(numbers[0]);    //to access an element of an array: array[index]

//for loop
for (let i = 0; i < numbers.length; i++) {
    console.log('for loop:' + numbers[i]);
}

//for ... in loop: specific for objects
for (let key in object) {
    console.log('for-in loop:' + key);
}

//for... of loop: specific for arrays
for (let number of numbers) {
    console.log('for-of loop:' + number);
}

//while loop: equivalent to for-loop
let j = 0;
while (j < numbers.length) {
    console.log('while loop:' + numbers[j]);
    j++;
}

//do ... while loop: the loop body and condition are inverted. In this way, the code will always perform the loop body at least once.
let k = 0;
do {
    console.log('do-while loop:' + numbers[k]);
    k++;
} while (k < numbers.length)

//functions: 

//function definition. Functions can be written anywhere in the code and can be called anywhere in the code.
function nameOfFunc (par1, par2) {      //par1, par2 are local variables.
    let sum = par1 + par2;  
    return sum;                             //if an explicit return value is not defined, the function returns "undefined". 
                                            //To return mutiple values from a function, it's possible to return an array or object containing those values.         
}


//function expression: the function is assigned to a variable. With this method, the function can only be called AFTER its expression.
let variableFunc = function (par1, par2) {
    let sum = par1 + par2;
    return sum;
}

//arrow function: quick, compact way to create anonymous functions (they have no name, therefore they must be assigned to a variable or used as callback functions)

let arrow = ((par1, par2) => par1 + par2); //If there are mutiple parameters or no parameters, the parentheses () are mandatory. 
                                            //If there is only one parameter, they can be omitted.
                                            //Implicit return if the arrow function is defined on a single line.
                                            //Explicit return is required for multi-line arrow functions.

console.log(nameOfFunc(2, 3));
console.log(variableFunc(2, 3));
console.log(arrow(2, 3));