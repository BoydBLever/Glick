const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const port = 8000;
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');


require('dotenv/config');

require('./config/mongoose.config');

app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

require('./routes/User.routes')(app);
require('dotenv').config();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

const user = require('./models/User.model');

const myFirstSecret = process.env.SECRET_KEY;

app.listen(port, () => console.log(`✅ My First Secret: ${myFirstSecret}, Listening on port: ${port}`));
