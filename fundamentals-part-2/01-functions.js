'use strict'

function  logger() {
    console.log('My name is  Rajiv')
}

logger();
logger();
logger();

function  paliyam(uncles, aunts) {
    console.log(uncles, aunts);
    const  veedu =`I have ${uncles} uncle's and ${aunts} aunt's`;
    return  veedu;
}

const kattilamadom = paliyam(6,6);
console.log(kattilamadom);


const paliath = `my mom's family is large, ${kattilamadom} & that comes to a dozen!`;

console.log(paliath);
console.log(paliyam(6,6));


function  seller(condos, townhomes)  {
    const  estateSales =  `I have sold ${condos} condo's and ${townhomes} townhomes in 2025`;
    return estateSales;
}

console.log(seller(25, 25 ));

