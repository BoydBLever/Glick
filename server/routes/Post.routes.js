const Posts = require('../controllers/Post.controller');

module.exports = function(app){
    app.post("/api/:email/newpost", Posts.create);
    app.get("/api/posts", Posts.getAll);
    app.get("/api/:email/posts", Posts.getByEmail);
    app.put('/api/:email/updatepost', Posts.update)
}