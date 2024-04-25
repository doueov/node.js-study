

function varTest(){
    var vv = 1;
    if(true){
        var vv = 2;
        console.log(vv);
    }
    console.log(vv);
}

function letTest(){
    let ll = 1;
    if(true){
      let ll = 2;
      console.log(ll);
    }
    console.log(ll);
}

console.log("var 실행");
varTest();
console.log("let 실행");
letTest();



