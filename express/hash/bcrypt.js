const bcrypt = require('bcrypt'); // bcrypt 라이브러리를 가져옴. 이 라이브러리는 비밀번호 해싱 및 비교 기능을 제공함
// 블로피시(Blowfish) 암호에 기반을 둔 암호화 해시 함수
const saltRounds = 10; // 해시 생성 시 사용할 salt의 라운드 수를 설정함. 값이 클수록 해싱 과정이 복잡해져 보안이 강화됨
const myPlaintextPassword = 'my password'; // 해싱할 원문 비밀번호를 설정함

// 비밀번호를 해싱하고, 해시된 비밀번호를 출력하는 비동기 함수 정의
async function hashPassword() {
    try {
        // bcrypt.hash 함수는 비동기적으로 원문 비밀번호를 해싱함. 
        // myPlaintextPassword와 saltRounds를 인자로 받아 해시된 비밀번호를 생성함
        const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

        // 생성된 해시 값을 저장
        const hashedPassword = hash;
        console.log('Hashed Password:', hashedPassword); // 해시된 비밀번호를 콘솔에 출력함

        // 입력 비밀번호를 설정함
        const inputPassword = 'my password';

        // bcrypt.compare 함수는 비동기적으로 입력된 비밀번호와 해시된 비밀번호를 비교함
        // inputPassword와 hashedPassword를 인자로 받아 일치 여부를 확인함
        const match = await bcrypt.compare(inputPassword, hashedPassword);
        console.log('Password match result:', match); // 비밀번호 일치 결과를 콘솔에 출력함 (일치하면 true, 일치하지 않으면 false)
    } catch (err) {
        console.error('Error:', err); // 함수 실행 중 에러가 발생하면 에러 메시지를 콘솔에 출력함
    }
}

// 비밀번호 해싱 함수를 호출하여 비밀번호를 해싱하고 비교함
hashPassword();

// 실습 복습
async function whatName() {
    try {
        // myNameis, saltRounds를 인자로 받아서 해시된 이름 생성
        const hash = await bcrypt.hash(myNameis, saltRounds);

        // 생성된 해시 값 저장
        const hashedName = hash;
        // 해시된 이름을 콘솔 출력
        console.log('My name is ..', hashedName);

        // 입력 이름 설정
        const inputName = "Miya osamu";

        // 입력된 이름과 해시한 이름을 비교
        const match = await bcrypt.compare(inputName, hashedName);
        console.log('Name match reault : ', match);
    } catch (err) {
        // 에러 발생 시 에러메시지 출력
        console.log('Error : ', err);
    }
}
    
whatName();
