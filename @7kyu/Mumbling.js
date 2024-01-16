const accum = (str) => {
    return str
        .split('')
        .map((i, idx) => i.toUpperCase() + i.toLowerCase()
            .repeat(idx))
        .join('-');
}

console.log(accum('abcd'));  // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty'));  // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt'));  // "C-Ww-Aaa-Tttt"
