const digitalRoot = (n) => {
    while (n > 9) {
        n = n.toString().split('').reduce((acc, item) => acc + +item, 0);
    }

    return n;
}

console.log(digitalRoot(16)); //16  -- > 1 + 6 = 7
console.log(digitalRoot(942)); //942  -- > 9 + 4 + 2 = 15  -- > 1 + 5 = 6
console.log(digitalRoot(132189)); //132189  -- > 1 + 3 + 2 + 1 + 8 + 9 = 24  -- > 2 + 4 = 6
console.log(digitalRoot(493193)); //493193  -- > 4 + 9 + 3 + 1 + 9 + 3 = 29  -- > 2 + 9 = 11  -- > 1 + 1 = 2



