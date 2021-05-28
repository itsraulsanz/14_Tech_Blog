const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/", async (req, res) => {

    console.log("Hitting get all posts")
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
        console.log(postData)
    // Serialize data so the template can read it
    const post = postData.map((post) => post.get({ plain: true }));
    console.log("post-mapping", post)
    // Pass serialized data and session flag into template
    res.render("post", {post, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
    res.render('signup')
})


router.get("/login", (req, res) => {
    res.render('login')
})
module.exports = router;
