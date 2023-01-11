module.exports = function reverse(n) {
    let numberStr = n.toString();
    let reversedStr = numberStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr);
    return reversedNum;
}