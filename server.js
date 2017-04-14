// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/janeosaur/express-personal-api/blob/master/README.md", // CHANGE ME?
    baseUrl: "https://stormy-sands-43266.herokuapp.com/",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes all available endpoints"
      },
      {
        method: "GET",
        path: "/api/profile",
        description: "Find out more about me"
      },
      {
        method: "GET",
        path: "/api/destinations",
        description: "Show all destinations I want to explore"
      },
      {
        method: "GET",
        path: "/api/destinations/:city",
        description: "Show a destination I want to explore"
      },
      {
        method: "POST",
        path: "/api/destinations",
        description: "Add a new destination"
      },
      {
        method: "DELETE",
        path: "/api/destinations/:city",
        description: "Delete a destination"
      },
      {
        method: "PUT",
        path: "api/destinations/:city/:duration",
        description: "Update a destination's duration"
      }
    ]
  })
});

app.get('/api/profile', function apiProfile(req, res) {
  res.json({
    name: "Jane Wie",
    githubUsername: "janeosaur",
    githubLink: "https://github.com/janeosaur/",
    githubProfileImage: "https://avatars3.githubusercontent.com/u/26048250?v=3&s=460",
    personalSiteLink: "https://janeosaur.github.io/",
    currentCity: "San Francisco",
    pets: [
      {name: "Collin", type: "Dog", breed: "Yorkie-Poodle"},
      {name: "Jinx", type: "Cat", breed: "Burmese"},
      {name: "Sammy", type: "Cat", breed: "Tabby"} ]
  })
})


// My destination resource index/find All
app.get('/api/destinations', function apiDest(req, res) {
  db.Destinations.find({}, function(err, allDestinations) {
    res.json({allDestinations})
  })
})


// My destination resource show/findOne -- doesn't show up on heroku?
app.get('/api/destinations/:city', function getCity(req, res) {
  var destcity = req.params.city;
  db.Destinations.findOne({city: req.params.city}, function (err, foundCity) {
    res.json(foundCity)
  });
})


// create -- how do i test if this works?
app.post('/api/destinations', function createDest(req, res) {
  var newDest = {city:'Moher', country: 'Ireland', duration: '4 days', photo: 'https://s-media-cache-ak0.pinimg.com/originals/51/85/9e/51859ee81ea856797981c07181725165.jpg'};
  db.Destinations.create(newDest, function (err, newDestination) {
    res.json(newDestination)
  })
})

// update -- unsure about this
app.put('api/destinations/:city/:duration', function updateDest(req, res) {
  var city = req.params.city;
  var duration = req.params.duration;
  db.Destinations.findOne({city: city}, function (err, findCity) {
    findCity.duration = duration; //
    findCity.save(function (err, savedCity) {
      res.json(foundDuration)
    })
  })
})



// delete -- how do i test if this works?
app.delete('/api/destinations/:city', function deleteDest(req, res) {
  var destCity = req.params.city;
  db.Destinations.findOneAndRemove({city: req.params.city}, function (err, deletedDest) {
    res.json(deletedDest);
  })
})




/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
