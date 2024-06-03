// 1,2,3이 먼저 찍히고 초와 관련된것이 찍힌다.

console.log("1");    

setTileout(() => {
    console.log("0초 경과");
},0)

setTileout(() => {
    console.log("2초 경과-1");
},2000)


console.log("2");

setTimeout(()=>{
    console.log("5초 경과")
}, 5000)

console.log("3");
