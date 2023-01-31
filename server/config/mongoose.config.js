const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("👅 CONNECTED TO DB"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

