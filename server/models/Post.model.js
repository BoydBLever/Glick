const mongoose = require('mongoose');
const User = require('../models/User.model');

const PostSchema = new mongoose.Schema({
    img: {
        type: String, //NEEEEEEEEDS ADJUSTING
        required: [true, "Upload an image to post."]
    },
    content: {
        type: String,
        required: [true, "Please describe the image you're posting."]
    },
    poster: {
        type: User,
        required: [true]
    },
    uplicks: {
        type: Number,
    },
    downlicks: {
        type: Number,
    }

}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;