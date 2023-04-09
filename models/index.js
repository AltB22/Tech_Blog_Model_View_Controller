//Import models
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment")

//Associations - what belongs to what

// Review sequelize association


//blog posts belong to users
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

//comments belong to user
Comment.belongsTo(User, {
    through: Post,
    foreignKey: 'user_id',
  
});



//hasOne is another type

//belongsToMany, belongsToOne - read docs

module.exports = { User, Post, Comment };
