const Users = require('../controllers/User.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get('/api/getByEmail/:email', Users.getByEmail);
    app.get('/api/getById/:id', Users.getById);
    app.put('/api/updateUser/:email', Users.update);
    app.get("/api/users", Users.getAll); //app.get("/api/users", authenticate, Users.getAll);
    app.delete("/api/user/:id", Users.delete);
}