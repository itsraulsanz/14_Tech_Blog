const router = require('express').Router();
const { Post } = require('../../models');

// GET all posts
router.get('/', (req, res) => {
  Post.findAll({
    include: [Comment]
  }).then((post) => {
    res.json(post)
  })
});

// GET a single post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [Comment]
  }).then((post) => {
    res.json(post)
  })
});

// CREATE a new post
router.post("/", (req, res) => {
  Post.create(req.body)
  .then((post) => {
    res.status(200).json(post);
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
  }).then((pst) => {
    res.json(pst)
  });
});

module.exports = router;
