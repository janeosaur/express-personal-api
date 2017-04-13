var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

mongoose.Promise = global.Promise;

// module.exports.Campsite = require("./campsite.js.example");

module.exports('./destinations.js')
