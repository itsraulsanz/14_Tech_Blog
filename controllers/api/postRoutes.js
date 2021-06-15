const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(newPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const editData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id
        }
      },
    );
    res.status(200).json(editData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a post
router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await Post.destroy(
      {
        where: {
          id: req.params.id
        }
      },
    );
    res.status(200).json(deleteData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
