/* 'use strict'
 
 const  camelRiders  = function(camelCount) {
    return camelCount* 3
 }
 const  horseRiders =  function(horseCount) {
    return horseCount* 2
 }


const manprocessor = function(camels, horses){
    const  camelMen  = camelRiders(camels);
    const  horseMen  = horseRiders(horses);
    return `there are ${camels} camels and ${camelMen} camel riders with  ${horses} horses and  ${horseMen} horse riders for the parade`
    
}

console.log(manprocessor(20,60));
*/

//arrow function:

/*const camelRiders  = camelCount =>  camelCount*3;
const horseRiders = horseCount =>  horseCount*2;

const manprocessor = (camels, horses)  => {
   const  camelMen  = camelRiders(camels);
    const  horseMen  = horseRiders(horses);
    return `there are ${camels} camels and ${camelMen} camel riders with  ${horses} horses and  ${horseMen} horse riders for the parade`
    
}
console.log(manprocessor(20,60));
*/

const camelRiders  = c =>  c*3;
const horseRiders = h =>  h*2;

const manprocessor = (camels, horses)  => {
   const  camelMen  = camelRiders(camels);
    const  horseMen  = horseRiders(horses);
    return `there are ${camels} camels and ${camelMen} camel riders with  ${horses} horses and  ${horseMen} horse riders for the parade`
    
}
console.log(manprocessor(20,60));

