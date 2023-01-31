const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const fs = require('fs');
const path = require('path');

module.exports = {
    index: (request, response) => {
        response.json({
            message: "Hello, this is GroupieLicks!"
        });
    },

    getAll: (req, res) => {
        User.find({ withCredentials: true })
            .then(allUsers => {
                console.log(allUsers.length);
                res.json(allUsers);
            })
            .catch(err => res.json(err))
    },

    getImg: (req, res) => {
        User.find({}, (err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('An error occurred', err);
            }
            else {
                res.render('imagesPage', { items: items });
            }
        });
    },

    postImg: (req, res) => {
        console.log(req);
        var obj = {
            name: req.body.name,
            desc: req.body.desc,
            img: {
                data: fs.readFileSync(path.join(__dirname + '../uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        User.findOneAndUpdate({ _id: request.params.id }, request.body)
            console.log("Hello from postImg!")
            .then(updatedUser => response.json(updatedUser))
            .catch(err => response.json(err))
    },

    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);

                res
                    .cookie("usertoken", userToken, secret, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    },

    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            // console.log('email not found in users collection');
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
}