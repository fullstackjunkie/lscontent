// exclusive or 
// create a function called xor that accepts two parameters
// compare the two parameters

function xor(num1, num2) {
    if ((num1 && !num2) || (num2 && !num1)) {
        return true;
    } else {
        return false;
    }
}




console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true