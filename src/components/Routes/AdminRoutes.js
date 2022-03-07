const express = require('express');
const router = express.Router();

const AdminDetails = require('../Models/AdminDetails');

router
  .route('/')
  .get((req, res) => {
    AdminDetails.find({})
      .then((blogs) => {
        res.send(blogs);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  })

  .post((req, res) => {
    const blog = new AdminDetails(req.body);
    blog
      .save()
      .then((blog) => {
        res.status(201).send(blog);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
module.exports = router;
