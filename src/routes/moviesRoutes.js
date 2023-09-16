const express = require('express');
const router = express.Router();
const {list, recomended, detail} = require('../controllers/moviesController');
const moviesController = require('../controllers/moviesController');

router
.get('/', list)
.get('/new', moviesController.new)
.get('/recommended', recomended)
.get('/detail/:id', detail)


module.exports = router;