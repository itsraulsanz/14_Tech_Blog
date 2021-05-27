const router = require('express').Router();
const { Post, Comment } = require('../../models');

// GET all posts
router.get('/', (req, res) => {
  Post.findAll({
    include: [Comment]
  }).then((postData) => {
    res.json(postData)
  })
});

// GET a single post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [Comment]
  }).then((postData) => {
    res.json(postData)
  })
});

// CREATE a new post
router.post("/", (req, res) => {
  Post.create(req.body)
  .then((postData) => {
    res.status(200).json(postData);
  })
  .then((postIds) => res.status(200).json(postIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// UPDATE a post
router.put('/:id', (req, res) => {
  Post.update(req.body, { 
    where: {
      id: req.params.id,
    },
  })
    .then((updatePost) => {
      
     res.json(updatePost)
    })
});

// DELETE a post
router.delete('/:id', (req, res) => {
  Post.destroy({
    where:{
      id:req.params.id,
    },
  }).then((deletePost) => {
    res.json(deletePost)
  });
});

module.exports = router;
