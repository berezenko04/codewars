const arrayPlusArray = (arr1, arr2) => {
    return arr1.concat(arr2).reduce((acc, i) => acc + i, 0);
}

console.log(arrayPlusArray([1, 2], [3, 4])); // 10
console.log(arrayPlusArray([1, 4], [5, 4, 10])); // 24
console.log(arrayPlusArray([1, 8, 2], [5, 9])); // 25