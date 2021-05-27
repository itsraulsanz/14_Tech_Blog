const User = require('./User');
const Post = require('./Post');

post.hasMany(Comment, {
  foreignKey: 'post_id',
});

comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post };
