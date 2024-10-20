var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});


// Creating a new page 
/* GET /about */
// handler that can respond to the url when we enter /about
router.get('/about', (req, res) => {
  res.render('about', {title: 'About'})
})

/* GET /projects */
// handler that can respond to the url when we enter /projects
router.get('/projects', (req, res) => {
  res.render('projects', {title: 'Projects'})
})

/* GET /contact */
// handler that can respond to the url when we enter /contact
router.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact'})
})

module.exports = router;
