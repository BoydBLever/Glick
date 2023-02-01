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

    findOne: (req, res) => {
        // console.log(req.params.id);
        Post.findOne({_id: req.params.id})
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err))
    },

    getByEmail: (req, res) => {
        Post.find({poster: req.params.email})
        .then(allPosts => res.json(allPosts))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Post.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(updatedPost => res.json(updatedPost))
        .catch(err => res.status(400).json(err))
    }
}