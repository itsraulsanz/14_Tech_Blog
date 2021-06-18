const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userPostsData = await Post.findAll({
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
    const userPosts = userPostsData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      userPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/new", withAuth, async (req, res) => {
  res.render("newPost");
});

router.get("/edit/:id", withAuth, async (req, res) => {
  const postData = await Post.findOne({
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
  const post = postData.get({ plain: true });
  console.log("post being rendered", post);
  res.render("updatePost", {
    ...post,
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
