const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPllaintextPassword = 'my password';

async function hashPassword() {
    try {
        const hash = await bcrypt.hash(myPllaintextPassword, saltRounds);

        // 해시 값을 메모리에 저장
        const hashedPassword = hash;
        console.log("Hashed Password : ", hashedPassword);

        // 비밀번호 비교
        const inputPassword = "my password";
        const match = await bcrypt.compare(inputPassword, hashedPassword);
        console.log("password match result : ", match);
    } catch (err) {
        // 해당 블록에서 에러에 대한 기록을 남김
        console.error('Error : ', err);
    }
}
hashPassword();