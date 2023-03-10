const User = require("./user");
const Blog = require("./blogPost");
const Comment = require("./comment")

//Associations - what belongs to what

//blog posts belong to users
Blog.belongsTo(User, {
    foreignKey: 'user_id',
})

//comments belong to user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

//post has many comments
//fk = post_id
Blog.hasMany(Comment, {
    foreignKey: 'post_id',
})

//hasOne is another type

//belongsToMany, belongsToOne - read docs

module.exports = { User, Blog, Comment };
