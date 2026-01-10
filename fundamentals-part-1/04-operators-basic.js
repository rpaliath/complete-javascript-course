 
 // Assignment operators
 
 /*const(ageRajiv) = 2026-1961
const(ageNimmi) = 2026-1964
console.log(ageRajiv,ageNimmi)*/

const currentYear =  2026
const birthYearRajiv = 1961
const birthYearNimmi = 1964;

const ageRajivNow = currentYear - birthYearRajiv;
const ageNimmiNow = currentYear -birthYearNimmi;
console.log(ageRajivNow, ageNimmiNow);

console.log( ageNimmiNow *2 +ageRajivNow*4+ ageRajivNow%ageNimmiNow+ ageNimmiNow**4)
// the answer is 14776723, which shows various basic operations with variables

// the + operator can be used to concatenate

const firstName = 'rajiv';
const lastName = 'paliath';

const givenName = firstName+'  '+ lastName;

console.log(givenName, typeof(givenName));
 
//Mathematical operators

let x = 10;   
 x += 10 ;  // this means x = x +10
 x *= 10; // this means x = x*10
 x ++ ;  // this means  x = x +1

 // comparison operators

  console.log(ageNimmiNow < ageRajivNow);
  console.log(ageNimmiNow > ageRajivNow);
  console.log(ageNimmiNow == ageRajivNow);

  const rajivPensionAge  = ageRajivNow >= 65;
  console.log(rajivPensionAge)








