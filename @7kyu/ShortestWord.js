const findShort = (s) => {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}


console.log(findShort('Hello world!')); // 5
console.log(findShort('Dear Steven, how are you?')); // 3