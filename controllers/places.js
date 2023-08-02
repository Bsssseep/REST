const router = require('express').Router();
const db = require('../models');

// Route to display all places
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places });
        })
        .catch(err => {
            console.log('err', err);
            res.render('error404');
        });
});

// Route to create a new place
router.post('/', (req, res) => {
  console.log(req,body);
  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: ';
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`;
                }
                res.render('places/new', { message });
            } else {
                res.render('error404');
            }
        });
});

// Route to show the form for creating a new place
router.get('/new', (req, res) => {
    res.render('places/new');
});

// Route to display details of a specific place
router.get('/:id', (req, res) => {
    db.Place.findOne({ _id: req.params.id })
        .populate('comments')
        .then(place => {
            console.log(place.comments);
            res.render('places/show', { place });
        })
        .catch(err => {
            console.log('err', err);
            res.render('error404');
        });
});

module.exports = router;
