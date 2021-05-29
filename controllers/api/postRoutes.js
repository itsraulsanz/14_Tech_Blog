const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

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
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
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
