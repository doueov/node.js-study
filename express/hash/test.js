const bcrypt = require('bcrypt');
const saltRounds = 10;
const myNameis = "Miya osamu";

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