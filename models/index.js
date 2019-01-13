var mongoose = require('mongoose');
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoscraper'
mongoose.Promise = global.Promise;
mongoose.set("debug", true);

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

module.exports = {
    Article: require("./Article"),
    Comment: require("./Comments")
};