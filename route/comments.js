const express = require('express');
const router = express.Router();
const Comment = require('../schemas/comment');

// 댓글 목록 조회 API
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// 댓글 작성 API
router.post('/', async (req, res) => {
  try {
    const { postId, user, password, content } = req.body;
    const comment = new Comment({
      postId,
      user,
      password,
      content,
    });
    await comment.save();
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// 댓글 수정 API
router.put('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    const { user, password, content } = req.body;
    comment.user = user;
    comment.password = password;
    comment.content = content;
    await comment.save();
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// 댓글 삭제 API
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await comment.remove();
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;