const findIntegral = (coef, exp) => {
    return `${coef / (exp + 1)}x^${exp + 1}`;
}

console.log(findIntegral(3, 2)); // 1x^3
console.log(findIntegral(12, 5)); // 2x^6
console.log(findIntegral(20, 1)); // 10x^2
console.log(findIntegral(40, 3)); // 10x^4