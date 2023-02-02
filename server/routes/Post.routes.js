const Posts = require('../controllers/Post.controller');

module.exports = function(app){
    app.post("/api/:email/newpost", Posts.create);
    app.get("/api/posts", Posts.getAll);
    app.get("/api/:email/posts", Posts.getByEmail);
    app.get("/api/posts/:id", Posts.findOne);
    app.put('/api/:id/updatepost', Posts.update);
    app.delete("/api/post/:id", Posts.delete);
}