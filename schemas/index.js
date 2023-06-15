const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://sparta:test@cluster0.vxfylst.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dburl, {
    // 아래의 옵션 넷은 몽구스 버전 6.0 미만에서만 사용한다.
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection; // 몽구스의 연결 객체를 변수로 저장한다.
// db에서 에러 메세지가 오면                  아래의 글자 다음에 에러 메세지를 뛰운다.
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = db; // app.js 에서 활용할 수 있도록 보낸다(export)


