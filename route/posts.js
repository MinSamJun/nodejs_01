const express = require('express');
const router = express.Router();
const Post = require('../schemas/post'); // 스키마를 가져온다.


// 목록 조회 API     비동기
router.get('/', async (req, res) => {
    try {
        //                       검색   정렬   정렬필드: 내림차순
        const posts = await Post.find().sort({ createdAt: -1 });
        //                  ↑ post.js(스키마)에서 내보낸 값.
        res.json(posts); //클라이언트에  json으로 보낸다.
        // ↑ express의 기능
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
        //         ↑ http 상태코드, 서버측 오류
    }
});


// 작성 API
router.post('/', async (req, res) => {
    try {
        const { user, password, title, content } = req.body;
        const post = new Post({
            user,
            password,
            title,
            content,
        });
        await post.save(); // db에 저장
        res.json(post); // 클라이언트에도 보내서 최신상태를 유지하게 한다.
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});



// 아이템 조회 API
router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id); // id 값으로 조회
      if (!post) { // post 가 없는 경우 404를 내보낸다.
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post); // 클라이언트로 보낸다.
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });


// 수정 API
router.put('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id); // id 값으로 조회
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      const { user, password, title, content } = req.body;
      post.user = user;
      post.password = password;
      post.title = title;
      post.content = content;
      await post.save(); // db에 업데이트한다.
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });


//  삭제 API
router.delete('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      await post.remove(); // 삭제한다.
      res.json({ message: 'Post deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;