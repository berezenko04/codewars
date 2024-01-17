const reversedWords = (str) => {
    return str.split(' ').reverse().join(' ');
}

console.log(reversedWords('The greatest victory')); // victory greatest The
console.log(reversedWords('Hello world')); // world Hello
console.log(reversedWords('Now hottest day in history')); // history in day hottest Now