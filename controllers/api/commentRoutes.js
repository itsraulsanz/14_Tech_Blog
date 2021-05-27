const router = require('express').Router();
const { Comment } = require('../../models');

// GET all posts
router.get('/', (req, res) => {
  Comment.findAll()
  .then((commentData) => {
    res.json(commentData)
  })
});

// GET a single comment
router.get('/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    },
  }).then((commentData) => {
    res.json(commentData)
  })
});

// CREATE a new comment
router.post("/", (req, res) => {
  Comment.create(req.body)
  .then((commentData) => {
    res.status(200).json(commentData);
  })
  .then((commentIds) => res.status(200).json(commentIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// UPDATE a comment
router.put('/:id', (req, res) => {
  Comment.update(req.body, { 
    where: {
      id: req.params.id,
    },
  })
    .then((updateComment) => {
      
     res.json(updateComment)
    })
});

// DELETE a comment
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where:{
      id:req.params.id,
    },
  }).then((deleteComment) => {
    res.json(deleteComment)
  });
});

module.exports = router;
