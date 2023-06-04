var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', component: 'home' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', component:'about'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', component: 'projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',component: 'services' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us', component: 'contact' });
});

module.exports = router;

