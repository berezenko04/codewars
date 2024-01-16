const disemvowelTrolls = (str) => {
    const vowels = ['i', 'e', 'o', 'a', 'u'];

    return str
        .split('')
        .filter(l => !vowels.includes(l.toLowerCase()))
        .join('');
}

console.log(disemvowelTrolls('This website is for losers LOL!')); // Ths wbst s fr lsrs LL!