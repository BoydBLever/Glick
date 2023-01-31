const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/User.routes')(app);
require('dotenv').config();

const myFirstSecret = process.env.SECRET_KEY;

app.listen(port, () => console.log(`✅ My First Secret: ${myFirstSecret}, Listening on port: ${port}`) );
