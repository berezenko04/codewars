const bitCounting = (n) => {
    return n.toString(2).split('0').join('').length;
}

console.log(bitCounting(41)); //3
console.log(bitCounting(239)); //7
console.log(bitCounting(8978607)); //9
console.log(bitCounting(15169)); //7