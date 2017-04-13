// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var destinationlist = [
  {
    city: 'Dubrovnik',
    country: 'Croatia',
    duration: '5 days',
    photo: 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Croatia/croatia-summerholidays-hvar-xlarge.jpg'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    duration: '5 days',
    photo: 'http://www.londonhigher.ac.uk/fileadmin/resources2/images/Home/london.jpg'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    duration: '5 days',
    photo: 'http://www.fourseasons.com/content/dam/fourseasons_magazine/SIN/marina-bay-sunset-singapore-1000x563.jpg/jcr:content/renditions/original'
  },
  {
    city: 'Reykjavik',
    country: 'Iceland',
    duration: '7 days',
    photo: 'http://www.travelzoo.com/uk/blog/wp-content/uploads/2015/06/tzoo.blog_.northern_lights_reykjavik.031815-960x480.jpg'
  }]

db.Destinations.create(destinationlist, function (err, result) {
  if (err) {
    return console.log('error', err)
  }
  console.log('created new destinations', result);
  process.exit();
})
