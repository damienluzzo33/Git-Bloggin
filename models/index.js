//* import all of the models
const User = require('./User');
const Comment = require('./Comment');
const Thread = require('./Thread');

//*  the user has many threads
User.hasMany(Thread, {
  foreignKey: 'user_id',
});

//*  the thread belongs to a user
Thread.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

//*  the user has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

//*  the comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

//* the comment belongs to a thread
Comment.belongsTo(Thread, {
  foreignKey: 'thread_id',
});

//* the thread has many comments
Thread.hasMany(Comment, {
  foreignKey: 'thread_id',
  as: 'comment',
});

//* export the updated models
module.exports = { User, Thread, Comment };
