const duplicateCount = (str) => {
    const strArr = str.split('').map(i => i.toLowerCase());
    const result = new Set(strArr.filter((i, idx, arr) => idx !== arr.indexOf(i)));

    return result.size;
}

console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('Indivisibilities')); // 2
console.log(duplicateCount('aA11')); // 2