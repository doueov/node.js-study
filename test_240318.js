

// 1. Template Literal  (백틱 사용하기)
// 다음 변수를 이용하여 콘솔에 오른쪽 주석과 같이 나타내시오.
const name1 = 'Alice';
const age1 = 30;
console.log(`제 이름은 ${name1}이고, 나이는 ${age1} 살입니다.`); // 제 이름은 Alice이고, 나이는 30살입니다.


// 2. 화살표 함수 문제: 주어진 함수를 화살표 함수로 변환해보세요.
// [함수명 : greet_2 ]
function multiply(a, b) {
  return a * b;
}
const greet_2 = (a, b) => a * b;


// 3. 화살표 함수 문제2 _ Arrow Function
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(7, 5)); //addNumbers를 사용하여 7+5를 수행하시오.


// 4. object의 속성을 추가하고 활용하기 : 주어진 객체에 새로운 속성을 추가해보세요.
const person4 = {
  name: 'Alice',
  age: 25,
};

// 4-1. person 객체에 height 속성을 추가해보세요 (height 값은 170)
person4.height = 170;

// 4-2. person 객체의 name 속성과 age 속성을 출력해보세요
console.log(`Name: ${person4.name}`);
console.log(`Age: ${person4.age}`);


// 5. 동등 연산자와 일치 연산자
console.log(1 == "1"); 
console.log(1 === "1"); 
// 5-1. 다음 값이 다른 이유는?
console.log("값이 다른 이유는 ==는 값, ===는 타입까지 비교해서")

// 6. null과 undefined
let aa = null;
let bb;
console.log(aa == bb); 
console.log(aa === bb); 
// 6-1. 다음 값이 다른 이유는?
console.log("값이 다른 이유는 bb가 undefined이라서")
                              

// 7. JSON 데이터를 객체로 그리고 문자열로 바꾸는 퀴즈:
// JSON 형식의 문자열
const jsonStr7 = '{"name":"Alice","age":30}';

// JSON 문자열을 객체로 변환하여 로그에 나타내보세요.
const objFromJson = JSON.parse(jsonStr7);
console.log(objFromJson);

// 객체의 age 값을 출력해보세요.
console.log(`Age = ${objFromJson.age}`);

// 객체를 JSON 문자열로 변환하여 로그에 나타내보세요.
const jsonFromObj = JSON.stringify(objFromJson);
console.log(jsonFromObj);


// 8. Nullish Coalescing Operator
const name8 = '';
const displayName1 = name8 ?? 'Anonymous';
const displayName2 = name8 || 'Anonymous';

console.log("displayName1 : " + displayName1); 
console.log("displayName2 : " + displayName2);

// 8-1. 다음 값이 다른 이유는?
console.log("값이 다른 이유는 ??로 비교한 경우 name8이 존재하기 때문에 빈 문자열이 나와서") ;

