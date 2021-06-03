const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const rawUserPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });
    const userPosts = rawUserPosts.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      userPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, async (req, res) => {
  res.render("newPost");
});

router.get("/edit/:id", async (req, res) => {
  const rawPost = await Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        include: [User],
      },
      {
        model: User,
        attributes: ["name"],
      },
    ],
  });
  const post = rawPost.get({ plain: true });
  console.log(post);
  res.render("editPost", {
    ...post,
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
