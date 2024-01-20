const descendingOrder = (n) => {
    return +('' + n).split('').sort((a, b) => a - b).reverse().join('');
}

console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321