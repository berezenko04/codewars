const spinWords = () => {
    return string.split(' ')
        .map((item) => item.length >= 5 ? item.split('').reverse().join('') : item).join(' ');
}

console.log(spinWords('Hey fellow warriors')); // "Hey wollef sroirraw" 
console.log(spinWords('This is a test')); // "This is a test" 
console.log(spinWords('This is another test')); // "This is rehtona test"