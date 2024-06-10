

console.log("안녕하세요.")

console.log(typeof 5) // 숫자 number
console.log(typeof '7') // 문자인 string
console.log(typeof (5<7)) // 참/거짓을 판명하기에 boolean

2 + 2
"2"+"2"
2+2-2
"2"+"2"-"2"
typeof NaN //"number"
999999999999999999999

function test_var(){
    var vv = 1;
    if(vv){
        var vv = 2;
        console.log(vv); //2
    }
    console.log(vv); //2
}
function test_let(){
    let ll = 1;
    if(ll){
        let ll = 2;
        console.log(ll); //2
    }
    console.log(ll); //1
}


/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
    const ellie1 = {
      name: 'Ellie',
      age: '18',
    };
  
    const name = 'Ellie';
    const age = '18';
  
    // 💩
    const ellie2 = {
      name: name,
      age: age,
    };
  
    // ✨
    const ellie3 = {
      name,
      age,
    };
  
    console.log(ellie1, ellie2, ellie3);
    console.clear();
  }
  
  /**
   * Destructuring Assignment
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   *
   */
  {
    // object
    const student = {
      name: 'Anna',
      level: 1,
    };
  
    // 💩
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // ✨
    {
      const { name, level } = student;
      console.log(name, level);
  
      const { name: studentName, level: studentLevel } = student;
      console.log(studentName, studentLevel);
    }
  
    // array
    const animals = ['🐶', '😽'];
  
    // 💩
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // ✨
    {
      const [first, second] = animals;
      console.log(first, second);
    }
    console.clear();
  }
  
  /**
   * Spread Syntax
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   *
   */
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
  
    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);
  
    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);
  
    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
    console.clear();
  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // 💩
    {
      function printMessage(message) {
        if (message == null) {
          message = 'default message';
        }
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
  
    // ✨
    {
      function printMessage(message = 'default message') {
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
    console.clear();
  }
  
  /**
   * Ternary Operator
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   */
  {
    const isCat = true;
    // 💩
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ✨
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }
    console.clear();
  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '🌤';
    const temparature = '16°C';
  
    // 💩
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ✨
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }
  
  /**
   * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
   */
  /**
   * Optional Chaining (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
   */
  {
    const person1 = {
      name: 'Ellie',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'Bob',
        },
      },
    };
    const person2 = {
      name: 'Bob',
    };
  
    // 💩💩💩💩💩💩
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);
    }
  
    // 💩💩💩
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    // 💩
    {
      function printManager(person) {
        console.log(person.job && person.job.manager && person.job.manager.name);
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ✨
    {
      function printManager(person) {
        console.log(person.job?.manager?.name);
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
  
  /**
   * Nullish Coalescing Operator (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  {
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
      const name = 'Ellie';
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    {
      const name = null;
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    // 💩
    {
      const name = '';
      const userName = name || 'Guest';
      console.log(userName);
  
      const num = 0;
      const message = num || 'undefined';
      console.log(message);
    }
  
    // ✨
    {
      const name = '';
      const userName = name ?? 'Guest';
      console.log(userName);
  
      const num = 0;
      const message = num ?? 'undefined';
      console.log(message);
    }
  }