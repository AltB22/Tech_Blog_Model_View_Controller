const User = require("./user");
const Blog = require("./blogPost");
const Comment = require("./comment")

//Associations - what belongs to what

//blog posts belong to users
//fk = user_id

//comments belong to user
//fk = user_id

//post has many comments
//fk = post_id

//hasOne is another type

//belongsToMany, belongsToOne - read docs




module.exports = { User, Blog, Comment };
