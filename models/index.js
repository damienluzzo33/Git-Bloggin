const User = require('./User');
const Comment = require('./Comment');
const Thread = require('./Thread');

User.hasMany(Thread, {
  foreignKey: 'user_id',
});

Thread.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Thread, {
  foreignKey: 'thread_id',
});

Thread.hasMany(Comment, {
  foreignKey: 'thread_id',
});

module.exports = { User, Thread, Comment };
