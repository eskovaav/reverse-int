module.exports = function reverse (n) {
    let a = String(n).split('').reverse().join('');
    return parseInt(a);
}
