const express = require('express'); // express 호출
const app = express(); // express 앱 생성
const port = process.env.PORT|| 3000;
//      환경변수에서 포트를 가져옴 || 실패시 3000번을 쓴다.


// 미들웨어
app.use(express.json()); // 클라이언트에서 보내는 JSON 데이터를 JS 객체로 변환한다.
// app.use(미들웨어) : 미들웨어를 앱에 등록한다.
// express.joson() : JSON 데이터를 파싱하는 EXPRESS의 미들웨어 기능



//  라우팅
const routesIndex = require('./route/index');      // '/'
const routesComments = require('./route/comments'); // /comments
const routesPosts = require('./route/posts');       // /posts
// require() 모듈을 불러오는 함수, 자동으로 .js 확장자를 찾는다.
// . : 현재 파일의 , /route 라우터 폴더에 , /index(comments,posts) 각각 파일을 호출한다.

app.use('/', routesIndex);
app.use('/comments', routesComments);
app.use('/posts', routesPosts); 
// 각각의 경로에 대해 라우팅을 한다...


// express 앱으로 서버를 시작한다.
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // 3번 줄 const port = process.env.PORT|| 3000;
  });                                              // 에서 설정한 포트로 접속한다.