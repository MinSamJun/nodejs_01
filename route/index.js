const express = require('express');
const router = express.Router(); // express의 라우터 기능을 불러온다.


// '/' 경로로 req(uest)가 들어오면 res(ponse) 를 내보낸다.
router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// export =  app.js 의 const routesIndex = require('./route/index'); 에서 사용할 수 있게 만들어 줌
module.exports = router;
