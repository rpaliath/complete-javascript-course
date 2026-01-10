/*let  is on of the three ways of declaing a variable. when 
declaring using let , the variable can be reassigned*/

let age = 64;
// age can be reassigned with the let declaration
age = 46
console.log(age)

/*the const variable declaration is used to assign values which need not be changed or mutated.
also const cannot be declared without a value. like for eg : const name; this will give a syntaxError.*/

const name = 'rajiv';

name = 'nimmi';
// the above will give a TypeError

// never declare a variable without let, var or const even though it will work in javascript

