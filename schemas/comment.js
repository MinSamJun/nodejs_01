const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaComment = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    user: { type: String, required: true },
    password: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', schemaComment);
module.exports = Comment;
