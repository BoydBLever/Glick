const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
// const { request } = require('http');

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

    getByEmail: (req, res) => {
        User.findOne({ email: req.params.email })
            .then(allUsers => res.json(allUsers))
            .catch(err => res.status(400).json(err))
    },

    getById: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        User.findOneAndUpdate({ email: req.params.email }, req.body)
            .then(updatedUser => res.json(updatedUser))
            .catch(err => res.status(400).json(err))
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
                // res.cookie("mycookie", "mydata", { httpOnly: true }).json({
                //     message: "This response has a cookie"
                // });
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

    delete: (req, res) => {
        // console.log(req.params.id);
        User.findByIdAndDelete({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },
}