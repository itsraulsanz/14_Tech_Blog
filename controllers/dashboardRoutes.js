const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/edit/:id", async (req, res) => {
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