const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/groupie_licks_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("👅 CONNECTED TO DB"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

