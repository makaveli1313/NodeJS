const express = require('express');
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp,
  getBootcampsInRadius
} = require('../controllers/bootcamps');

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

module.exports = router;
