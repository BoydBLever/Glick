const Post = require("../models/Post.model");

module.exports = {
    create: (req, res) => {
        Post.create(req.body)
            .then(newPost=> res.json(newPost))
            .catch(err => res.json(err))
    },

    getAll: (req, res) => {
        Post.find({ withCredentials: true })
            .then(allPosts => {
                console.log(allPosts.length);
                res.json(allPosts);
            })
            .catch(err => res.json(err))
    },

    getByEmail: (req, res) => {
        Post.findOne({poster: req.params.email})
        .then(allPosts => res.json(allPosts))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Post.findOneAndUpdate({email: req.params.email}, req.body)
        .then(updatedPost => res.json(updatedPost))
        .catch(err => res.status(400).json(err))
    }
}