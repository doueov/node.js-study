const {text_odd, text_even} = require("./moduleText");

function checkStringOddOrEven(str){
    if(String.length % 2){
        return text_odd;
    }
    return text_even;
}

console.log("3 : ", checkStringOddOrEven("안녕"));
console.log("4 : ", checkStringOddOrEven("안녕하세요"));

mudule.export = [checkStringOddOrEven, text_even, text_odd];