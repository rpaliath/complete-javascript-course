'use strict'
//function declaration:
function  age(birthyear) {
    return  2026 - birthyear;
}
console.log(age(1961));

/* under function declaration , we can call a function before actually decaring one. in the above
example, console.log(age(1961)) can be done first and then the function declared later.*/

// function expression: 
/* under function expression the function can be called only after declaring
a function*/

const  calcAge = function(birthyear) {
    return 2026 - birthyear;
}

console.log(calcAge(1961), age(1961));

