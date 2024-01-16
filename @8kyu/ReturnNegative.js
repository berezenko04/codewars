const returnNegative = (n) => {
    return n <= 0 ? n : -n;
}

console.log(returnNegative(1));    // -1
console.log(returnNegative(-5));   // -5
console.log(returnNegative(0));    //  0
console.log(returnNegative(0.12)); // -0.12