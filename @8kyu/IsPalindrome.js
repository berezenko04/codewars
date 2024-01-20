const isPalindrome = (x) => {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false