const sumOfPositive = (arr) => {
    return arr.filter(i => i > 0).reduce((acc, i) => acc + i, 0);
}

console.log(sumOfPositive([1, -4, 7, 12])); // 20
console.log(sumOfPositive([1, -4, 0, 31, 7, 12])); // 51
console.log(sumOfPositive([4, 0, -2, 12, -6, 28])); // 44