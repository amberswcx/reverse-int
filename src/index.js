module.exports = function reverse(n) {
    let reversedN = '';

    if (n < 0) {
        n = -n;
    }

    while (n >= 1) {
        reversedN += n % 10;
        n = Math.floor(n / 10);
    }
    return +reversedN;
}
