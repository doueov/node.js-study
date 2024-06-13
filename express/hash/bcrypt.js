const bcrypt = require('bcrypt');
// 블로피시(Blowfish) 암호에 기반을 둔 암호화 해시 함수
const saltRounds = 10;
const myPlaintextPassword = 'my password';

async function hashPassword() {
    try {
        const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

        // 해시 값을 메모리에 저장
        const hashedPassword = hash;
        console.log('Hashed Password:', hashedPassword);

        // 비밀번호 비교
        const inputPassword = 'my password';
        const match = await bcrypt.compare(inputPassword, hashedPassword);
        console.log('Password match result:', match);
    }
    // 해당 블록에서 에러에 대한 기록을 남김 
    catch (err) {
        console.error('Error:', err);s
    }
}

hashPassword();