const getLastDigit = (index) => {
    const fibArr = [0, 1];

    for (let i = 2; i <= index; i++) {

        let prev1 = fibArr[i - 1];
        let prev2 = fibArr[i - 2];
        fibArr.push((prev1 + prev2) % 10);
    }

    return fibArr[index];
}

console.log(getLastDigit(15)); // 610 => 0