function  paliyam(uncles, aunts) {
    veedu =console.log(`I have ${uncles} uncle's and ${aunts} aunt's`);
    return  veedu;
}

paliyam(6,6);

/*     Uncaught ReferenceError: veedu is not defined
    at paliyam (functions.js:12:11)
    at functions.js:16:1   */

    // have to use const  veedu =console.log(`I have ${uncles} uncle's and ${aunts} aunt's`);
