module.exports = function reverse(n) {
    let reversedN = '';
    while (n >= 1) {
        reversedN += n % 10;
        n = Math.floor(n / 10);
    }
    return +reversedN;
}
