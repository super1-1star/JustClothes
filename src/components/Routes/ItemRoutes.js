const express = require('express');
const { ItemMen, ItemWomen } = require('../Models/model');
// const WomenController = require('../Controllers/WomenController');
const router = express.Router();

router.route('/').get((req, res) => {
  ItemMen.find({})
    .then((blogs) => {
      res.send(blogs);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});


router
  .route('/men')
  .get((req, res) => {
    ItemMen.find({})
      .then((blogs) => {
        res.send(blogs);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  })
  .post((req, res) => {
    const blog = new ItemMen(req.body);
    blog
      .save()
      .then((blog) => {
        res.status(201).send(blog);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

router
  .route('/men/:id')
  .patch((req, res) => {
    ItemMen.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((blog) => {
        if (!blog) {
          return res.status(404).send();
        }
        res.send(blog);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  })
  .delete((req, res) => {
    ItemMen.findByIdAndDelete(req.params.id)
      .then((blog) => {
        if (!blog) {
          return res.status(404).send();
        }
        res.send(blog);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

// // router.route('/itemWomen').get(WomenController.getItemMen);
router
  .route('/women')
  .get((req, res) => {
    ItemWomen.find({})
      .then((blogs) => {
        res.send(blogs);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  })
  .post((req, res) => {
    const blog = new ItemWomen(req.body);
    blog
      .save()
      .then((blog) => {
        res.status(201).send(blog);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

router
  .route('/women/:id')
  .patch((req, res) => {
    ItemWomen.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((blog) => {
        if (!blog) {
          return res.status(404).send();
        }
        res.send(blog);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  })
  .delete((req, res) => {
    ItemWomen.findByIdAndDelete(req.params.id)
      .then((blog) => {
        if (!blog) {
          return res.status(404).send();
        }
        res.send(blog);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });


module.exports = router;
