var mongoose = require('mongoose');
    Schema = mongoose.Schema;


var DestinationsSchema = new Schema ({
    city: String,
    country: String,
    duration: String,
    photo: String
  })

var Destinations = mongoose.model('Destinations', DestinationsSchema);

module.exports = Destinations;
