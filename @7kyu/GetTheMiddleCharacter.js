const getTheMiddleCharacter = (s) => {
    const len = s.length;
    return len % 2 == 0 ? `${s[len / 2 - 1]}${s[(len / 2)]}` : s[Math.floor(len / 2)];
}

console.log(getTheMiddleCharacter('test')); // es
console.log(getTheMiddleCharacter('testing')); // t
console.log(getTheMiddleCharacter('middle')); // dd