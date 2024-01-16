const removeAllMarkedFromList = (integerList, valuesList) => {
    return integerList.filter(i => !valuesList.includes(i));
}


console.log(removeAllMarkedFromList([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])); // [2, 2, 4]
console.log(removeAllMarkedFromList([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2])); // [5, 6, 7, 8]
console.log(removeAllMarkedFromList([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3])); // [8, 7, 6, 5, 1]
