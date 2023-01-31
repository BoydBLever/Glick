const Users = require('../controllers/User.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    app.get('/api', Users.getImg);
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get("/api/users", authenticate, Users.getAll); //Has authentications
}

// // inside of user.routes.js
// const Users = require('../controllers/user.controller');
// module.exports = app => {
//   // this route now has to be authenticated
// }

