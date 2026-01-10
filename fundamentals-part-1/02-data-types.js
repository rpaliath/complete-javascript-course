//number
let age = 64;
//string
let firstName = 'rajiv';
// boolean
let subscribe = true;
// console.log of address  will return undefined
let address;
// null means an 'empty value'
const emptyValue = null

// Symbol(ES2015): Value that is unique and cannot be changed
const mySymbol = Symbol("description");
console.log(mySymbol); // Output: Symbol(description)


// BigInt (ES2020): large integers than the number can
// need to add an n at the end of the number
const largeNumber = 9007199254740991234n;
console.log(largeNumber); // Output: 9007199254740991234n


let person = [age, firstName,subscribe,address];
console.log(person);

/*Dynamic typing: javascript automatically detects the data type of the value 
that is added into a variable.We can also assign a different data type into a varible without
any problem. for eg: let x = 3 can be changed into  x = ' cat' without any problem*/

let x = 25;
x = 'cat';
  console.log(x,x);    
//   should show cat cat in the console

// typeof operator to know the data type of any value
console.log(typeof 'rajiv');
// should show string in the console

let year;
console.log(year);
// will show undefined in the console.
// next we can assign a value to the variable year
year = 1961
console.log(year)
console.log(typeof year);

// a bug in javascfipt with regard to typeof
console.log(typeof null);
// will show this is as an object

