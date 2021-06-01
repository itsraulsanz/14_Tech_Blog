const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "comment", "post_id", "user_id"],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single post
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ mode: Comment }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// CREATE a new post
router.post("/", async (req, res) => {
  try {
    const newPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id,
    });

    res.status(200).json(newPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a post
router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.update(
      {
        title: req.body.title,
      },
      {
        where: {
          id: req.params.id
        }
      },
    );
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deletePost) => {
    res.json(deletePost);
  });
});

module.exports = router;
