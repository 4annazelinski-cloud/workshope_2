// exercise_2.js



function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(8));


"a backslash (\) inside quoted text indicates that the character after it has a special meaning.";


console.log("A newline character is written like \"\\n\"");


console.log(NaN == NaN);
console.log(3 > 2 + 4 < 6);

console.log("true + false =", 3 > 2 + NaN == NaN);
console.log("true - false =", 3 > 2 - NaN == NaN);

console.log("true * false =", 3 > 2 * NaN == NaN);
console.log("true / false =", 3 > 2 / NaN == NaN);


console.log(true && false, " = true and false");
console.log(false && true, " = false && true");

console.log(true && true, " = true and true");



// The || operator, for example, will return the value 
// to its left when that value can be converted to true 
//  and will return the value on its right otherwise.
console.log(false || true, " = false or true");

console.log(false || false, " = false or false");



// returns the value on the right only if 
// the one on the left is null or undefined
console.log(0 ?? 1);  
console.log(false ?? null);
console.log(null ?? false);
console.log(true ?? false);
console.log(false ?? true);


// console.log(1 + 1 == 2 && 10 * 10 > 50);

let price = 15;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = price - (price * discount);
console.log(total);



console.log(typeof null);