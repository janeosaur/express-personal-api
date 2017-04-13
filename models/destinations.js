var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var DestinationsSchema = new Schema (
  {
    city: 'Dubrovnik',
    country: 'Croatia',
    duration: '7 days',
    photo: 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Croatia/croatia-summerholidays-hvar-xlarge.jpg',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    duration: '4 days',
    photo: 'http://www.dulichsingapore.com/upload/product/630160361335.jpg'
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    duration: '7 days',
    photo: 'http://www.maryville.edu/globaled/files/2012/09/file3041299869591.png'
  }
)

var Destinations = mongoose.model('Destinations', DestinationsSchema);

module.exports = Destinations;
