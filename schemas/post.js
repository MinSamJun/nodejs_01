const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaPost = new Schema(
    {
        user: { type: String, required: true },
        password: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
    },
    { timestamps: true } // 몽구스의 스키마 옵션
    // 생성시 createdAt을 만들고, 업데이트마다 updatedAt도 업데이트 된다.
);

const Post = mongoose.model('Post', schemaPost);
module.exports = Post;