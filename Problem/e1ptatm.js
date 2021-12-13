(function logNumber(y) {
    console.log(y)}
)(2);

console.log('I am just a log')

setTimeout(() =>
    console.log('I am in setTimeout'), 0);

Promise.resolve('Resolved Promise 1').then(x => console.log(x))

console.log('I am just a log 2')

Promise.resolve('Resolved Promise 2').then(x => console.log(x))

// 2
// I am just a log
// I am just log 2
// R P 1
// R P 2
// I am in setTimeout
