const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        unique: true,
        require: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        require: true
    },
    nickname: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    content: {
        type: String,
    },
});

module.exports = mongoose.model('Post', postSchema);
