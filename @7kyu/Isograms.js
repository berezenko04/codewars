const isIsogram = (str) => {
    const strArr = str.split('').map(i => i.toLowerCase());
    const strSet = [...new Set(strArr)];
    return strArr.length - strSet.length ? false : true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("moose")); // false
console.log(isIsogram("aba")); // false