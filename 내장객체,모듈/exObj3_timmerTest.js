const timeout0 = setTimeout(() => {
    console.log('0초 후 실행');
}, 0);
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);
const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);
const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다1');
}, 3000);
setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
    //clearImmediate(immediate2);
}, 2500);
const immediate = setImmediate(() => {
    console.log('즉시 실행');
});
const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다2');
});
clearImmediate(immediate2);

