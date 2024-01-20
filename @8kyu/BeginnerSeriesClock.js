const getMilliSeconds = (h, m, s) => {
    return (h * 3600 + m * 60 + s) * 1000;
}

console.log(getMilliSeconds(0, 1, 1)); // 61000